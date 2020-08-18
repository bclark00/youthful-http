import axios from "axios";
import produce from "immer";
import TrueVaultClient from "truevault";
const CryptoJS = require("crypto-js");

const ENVIROMENT = process.env.DEPLOYMENT_ENV;

const apiKey = process.env.TRUEVAULT_FULL_ADMIN_KEY;

const PWN_RESULTS_SCHEMA_ID = "34ab15be-6783-411b-bd50-0bf72f5e8e62";

const PWN_RESULTS_VAULT_ID = "072febb7-684d-4cbc-9381-018de82d4532";

const key = "bdc87ab40eb6310db805afdeb230e873";
const secret = "1c04ed5f7542cc74643437f207658739";

const accountSid = "ACf18fab5c57dde074d4f5f493a5e8791c";
const authToken = "498574525cd42a9d7e51ff166c027bf9";
const client = require("twilio")(accountSid, authToken);

// This doesn't need to be modified.
function base64url(source: any) {
  // Encode in classical base64
  let encodedSource = CryptoJS.enc.Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, "");

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, "-");
  encodedSource = encodedSource.replace(/\//g, "_");

  return encodedSource;
}

function payload() {
  var now = Math.floor(Date.now() / 1000 - 1000);
  let content: any = { iss: null, iat: null, exp: null, ver: null };
  content.iss = key;
  content.iat = now;
  content.exp = now + 24 * 60 * 60; // 1 day
  content.ver = 1;
  return content;
}

var header = {
  typ: "JWT",
  alg: "HS256"
};

// encode header
var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
var encodedHeader = base64url(stringifiedHeader);

// encode data
var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload()));
var encodedData = base64url(stringifiedData);

// build token
var token = encodedHeader + "." + encodedData;

// sign token
var signature = CryptoJS.HmacSHA256(token, secret);
signature = base64url(signature);
var signedToken = token + "." + signature;

type webhookData = {
  id: string | number;
  result: "Normal" | "Released";
  result_complete: "Complete" | "Incomplete";
};

interface TwilioData {
  sid: string;
  friendly_name: string;
  date_created: string;
  date_updated: string;
  secret: string;
}

type TStripePurchase = {
  id: string;
  owner_id: string;
  vault_id: string;
  purchase_status: string;
  payment_intent: string;
  stripe_purchase_id: string;
  sku: string;
  purchase_timestamp: number;
};

export async function handler(event: any) {
  const data: webhookData = event.queryStringParameters;

  let pwnTrueVaultClient: any = new TrueVaultClient({ apiKey: apiKey });

  if (data.result_complete === "Complete") {
    if (data.result === "Normal") {
      try {
        let {
          resultsDocumentWithFormattedResults,
          target_user_id
        }: {
          resultsDocumentWithFormattedResults: FormattedResultsDocument;
          target_user_id: string;
        } = await retrieveAndFormatResultsFromPWN(data.id, signedToken);

        let fullTargetUser = await pwnTrueVaultClient.readUser(target_user_id);

        let currentStripePurchaseDetails: TStripePurchase =
          fullTargetUser?.attributes?.stripe_purchases?.[0];

        let twilioData: TwilioData = await client.newKeys.create();

        await pwnTrueVaultClient.sendSMSTwilio(
          "ACf18fab5c57dde074d4f5f493a5e8791c",
          twilioData.sid,
          twilioData.secret,
          "a2ab13e3-b73a-4bd4-ace3-536bd49a99ae",
          { literal_value: "+12132773112" },
          { user_attribute: "phone" },
          `NORMAL results released. User id: ${target_user_id}, pwn_order_id: ${data.id}`,
          []
        );

        let initialReleasedCurrentResultsDocument = Object.assign(
          {},
          resultsDocumentWithFormattedResults,
          {
            owner_dob: fullTargetUser.attributes.profile.dob,
            owner_username: fullTargetUser.username,
            pwn_results_status: "complete",
            results_viewed_by_user: false,
            results_viewed_by_staff: false,
            pwn_results_complete: true,
            owner_first_name: fullTargetUser.attributes.profile.first_name,
            owner_last_name: fullTargetUser.attributes.profile.last_name,
            pwn_abnormal_flag:
              resultsDocumentWithFormattedResults.results.summary.abnormal_flag,
            date_created: Math.floor(Date.now() / 1000),
            date_updated: Math.floor(Date.now() / 1000),
            owner_id: fullTargetUser.user_id,
            stripe_purchase_id: currentStripePurchaseDetails.id
          }
        );

        let createdDocument = await pwnTrueVaultClient.createDocument(
          PWN_RESULTS_VAULT_ID,
          PWN_RESULTS_SCHEMA_ID,
          initialReleasedCurrentResultsDocument,
          target_user_id
        );

        let releasedCurrentResultsDocumentWithFlags = Object.assign(
          {},
          createdDocument,
          {
            canceled: false,
            pwn_results_status: "normal",
            results_viewed_by_user: false,
            pwn_abnormal_flag:
              resultsDocumentWithFormattedResults.results.summary.abnormal_flag,
            pwn_results_complete: true,
            stripe_purchase_id: currentStripePurchaseDetails.id
          }
        );

        let userAttributesWithPWNResults = addPWNResultsToUserAttributesAndUpdateUserProgressLevel(
          fullTargetUser.attributes,
          releasedCurrentResultsDocumentWithFlags
        );

        await pwnTrueVaultClient.updateUserAttributes(
          target_user_id,
          userAttributesWithPWNResults
        );

        await pwnTrueVaultClient.sendEmailSendgrid(
          "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",
          target_user_id,
          "25d5583c-d763-47da-afd4-0842632c6570",
          { literal_value: "results@preconceptiontest.com" },
          { system_field: "username" },
          {}
        );

        return {
          statusCode: 200,
          body: JSON.stringify({
            status: "succeeded"
          })
        };
      } catch (error) {
        console.log(
          "Error releasing and updating data with COMPLETE and NORMAL results",
          error
        );
        return {
          statusCode: 429,
          body: JSON.stringify({
            error,
            status: "failed"
          })
        };
      }
    } else if (data.result === "Released") {
      try {
        let {
          resultsDocumentWithFormattedResults,
          target_user_id
        }: {
          resultsDocumentWithFormattedResults: FormattedResultsDocument;
          target_user_id: string;
        } = await retrieveAndFormatResultsFromPWN(data.id, signedToken);

        let fullTargetUser = await pwnTrueVaultClient.readUser(target_user_id);

        let currentStripePurchaseDetails: TStripePurchase =
          fullTargetUser?.attributes?.stripe_purchases?.[0];

        let twilioData: TwilioData = await client.newKeys.create();

        await pwnTrueVaultClient.sendSMSTwilio(
          "ACf18fab5c57dde074d4f5f493a5e8791c",
          twilioData.sid,
          twilioData.secret,
          "a2ab13e3-b73a-4bd4-ace3-536bd49a99ae",
          { literal_value: "+12132773112" },
          { user_attribute: "phone" },
          `ABNORMAL results released. User id: ${target_user_id},  pwn_order_id: ${data.id}`,
          []
        );

        let initialReleasedCurrentResultsDocument = Object.assign(
          {},
          resultsDocumentWithFormattedResults,
          {
            owner_dob: fullTargetUser.attributes.profile.dob,
            owner_username: fullTargetUser.username,
            pwn_results_status: "released",
            results_viewed_by_user: false,
            results_viewed_by_staff: false,
            pwn_results_complete: true,
            owner_first_name: fullTargetUser.attributes.profile.first_name,
            owner_last_name: fullTargetUser.attributes.profile.last_name,
            pwn_abnormal_flag:
              resultsDocumentWithFormattedResults.results.summary.abnormal_flag,
            date_created: Math.floor(Date.now() / 1000),
            date_updated: Math.floor(Date.now() / 1000),
            owner_id: fullTargetUser.user_id,
            stripe_purchase_id: currentStripePurchaseDetails.id
          }
        );

        let createdDocument = await pwnTrueVaultClient.createDocument(
          PWN_RESULTS_VAULT_ID,
          PWN_RESULTS_SCHEMA_ID,
          initialReleasedCurrentResultsDocument,
          target_user_id
        );

        let releasedCurrentResultsDocumentWithFlags = Object.assign(
          {},
          createdDocument,
          {
            canceled: false,
            pwn_results_status: "released",
            results_viewed_by_user: false,
            pwn_abnormal_flag:
              resultsDocumentWithFormattedResults.results.summary.abnormal_flag,
            pwn_results_complete: true,
            stripe_purchase_id: currentStripePurchaseDetails.id
          }
        );

        let userAttributesWithPWNResults = addPWNResultsToUserAttributesAndUpdateUserProgressLevel(
          fullTargetUser.attributes,
          releasedCurrentResultsDocumentWithFlags
        );

        await pwnTrueVaultClient.updateUserAttributes(
          target_user_id,
          userAttributesWithPWNResults
        );

        await pwnTrueVaultClient.sendEmailSendgrid(
          "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",
          target_user_id,
          "25d5583c-d763-47da-afd4-0842632c6570",
          { literal_value: "results@preconceptiontest.com" },
          { system_field: "username" },
          {}
        );

        return {
          statusCode: 200,
          body: JSON.stringify({
            status: "succeeded"
          })
        };
      } catch (error) {
        console.log(
          "Error releasing and updating data with COMPLETE and RELEASED (Abnormal) results",
          error
        );
        return {
          statusCode: 429,
          body: JSON.stringify({
            error,
            status: "failed"
          })
        };
      }
    } else {
      console.log("Results received and complete, but unknown type.", data);
      return {
        statusCode: 429,
        body: JSON.stringify({
          status: "failed"
        })
      };
    }
  } else if (data.result_complete === "Incomplete")
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "Results received, but not complete"
      })
    };
  else {
    console.log("Results received have uknown completeness.", data);
    return {
      statusCode: 429,
      body: JSON.stringify({
        status: "failed"
      })
    };
  }
}

async function retrieveAndFormatResultsFromPWN(
  pwn_order_id: string | number,
  signedToken: string
) {
  try {
    const response = await axios({
      method: "get",
      url: `https://api-staging.pwnhealth.com/v2/labs/orders/${pwn_order_id}/`,
      headers: { Authorization: `Bearer ${signedToken}` }
    });

    let pwnOrder: TOrderBody = response.data;

    let target_user_id = pwnOrder.order.customer.external_id;

    let formattedResults = formatResults(pwnOrder.order.results.analytes);

    let baseResultsObject = { results: pwnOrder.order.results };

    const resultsDocumentWithFormattedResults = produce(
      baseResultsObject,
      (draft: any) => {
        draft.formatted_results = formattedResults;
      }
    );

    return { resultsDocumentWithFormattedResults, target_user_id };
  } catch (error) {
    console.log("ERROR", error);
    return error;
  }
}

function formatResults(analytes: Analyte[]) {
  let uniqueLabCodeList = [
    ...new Set(analytes.map(analyte => analyte.order_lab_code))
  ];
  let baseUniqueResultList = uniqueLabCodeList.map(baseUniqueResultCode => {
    return { order_lab_code: baseUniqueResultCode, values: [] };
  });
  let finalResultList = baseUniqueResultList.map(baseUniqueResult => {
    //@ts-ignore
    baseUniqueResult.values = analytes.filter((result: any) => {
      return result.order_lab_code === baseUniqueResult.order_lab_code;
    });
    return baseUniqueResult;
  });
  return finalResultList;
}

function addPWNResultsToUserAttributesAndUpdateUserProgressLevel(
  targetUserAttrbiutes: any,
  createdDocument: any
) {
  const updatedUserAttributes = produce(targetUserAttrbiutes, (draft: any) => {
    if (createdDocument) {
      draft.pwn_results.unshift(createdDocument);
      draft.user_progress_level = "processed";
    } else {
      console.log("Purchase Document Never Created", targetUserAttrbiutes);
      throw new Error("Error,  No createdDocument found");
    }
  });
  return updatedUserAttributes;
}

type TOrderBody = {
  order: Order;
};

export interface Order {
  id: number;
  status: "approved" | "cancelled" | "rejected" | "approval_pending";
  cancelation_reason?: string;
  confirmation_code: string;
  account_number: string;
  draw_location: string;
  take_tests_same_day: boolean;
  customer: Customer;
  tests: string[];
  test_names: string[];
  test_groups: number[];
  clinical_note: string;
  reference: string;
  test_disclaimer_ids: any[];
  prior_genetic_testing: null;
  medication_list: null;
  custom_attributes: null;
  created_at: string;
  updated_at: string;
  expires_at: string;
  recollection_id: number;
  grouping: string;
  subscription_id: null;
  lab_acknowledged_on: null;
  links: Links;
  physician_review: PhysicianReview;
  results: Results;
}

export interface Customer {
  external_id: null;
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  phone: string;
  sms_opted_in: boolean;
  email: string;
  address: Address;
}

export interface Address {
  line: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
}

export interface Links {
  ui_customer: string;
}

export interface PhysicianReview {
  name: string;
  upin: string;
  npi: string;
  reviewed_at: string;
}

export interface Results {
  format: string;
  summary: Summary;
  analytes: Analyte[];
}

export interface Analyte {
  order_lab_code: string;
  order_lab_name: string;
  result_lab_code: string;
  result_lab_name: string;
  test_group_id: number;
  test_group_name: TestGroupName;
  lab_abnormal_flag: AbnormalFlag;
  client_abnormal_flag: null;
  abnormal_flag: AbnormalFlag;
  released: boolean;
  range_type: RangeType | null;
  reference_ranges: any[];
  released_at: string;
  result_status: ResultStatus;
  value: string;
  value_unit: null | string;
  observed_at: string;
  notes: null | string;
  lab_reference_range: string;
  value_type: ValueType;
}

export enum AbnormalFlag {
  H = "H",
  N = "N",
  L = "L"
}

export enum RangeType {
  PositiveAbnormal = "POSITIVE_ABNORMAL",
  ReferenceRange = "REFERENCE_RANGE"
}

export enum ResultStatus {
  Cancelled = "cancelled",
  Final = "final"
}

export enum TestGroupName {
  EssentialNonHIV = "Essential- Non HIV"
}

export enum ValueType {
  Nm = "NM",
  St = "ST",
  Tx = "TX"
}

export interface Summary {
  complete: boolean;
  status: string;
  abnormal_flag: boolean;
  sample_collected_at: string;
  released_at: string;
  result_received_at: string;
  result_updated_at: string;
}

interface FormattedResultsDocument {
  results: FormattedResults;
}

export interface FormattedResults {
  format: string;
  summary: Summary;
  analytes: FormattedAnalyte[];
}

export interface FormattedAnalyte {
  name: string;
  values: Value[];
}

export interface Value {
  order_lab_code: string;
  order_lab_name: string;
  result_lab_code: string;
  result_lab_name: string;
  test_group_id: number;
  test_group_name: TestGroupName;
  lab_abnormal_flag: AbnormalFlag;
  client_abnormal_flag: null;
  abnormal_flag: AbnormalFlag;
  released: boolean;
  range_type: RangeType | null;
  reference_ranges: any[];
  released_at: string;
  result_status: ResultStatus;
  value: string;
  value_unit: null | string;
  observed_at: string;
  notes: null | string;
  lab_reference_range: string;
  value_type: ValueType;
}
