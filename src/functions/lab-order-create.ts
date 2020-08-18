const CryptoJS = require("crypto-js");
import axios from "axios";
import produce from "immer";
import TrueVaultClient from "truevault";
import {
  TAddress,
  TOrderCreateResponseBody,
  TRequestCustomer,
  TUserProfile
} from "../features/Attributes/Store/types";

const apiKey = process.env.TRUEVAULT_PWN_KEY;

const PWN_ORDERS_SCHEMA_ID = process.env.PWN_ORDERS_SCHEMA_ID;

const PWN_ORDERS_VAULT_ID = process.env.PWN_ORDERS_VAULT_ID;

const ENVIRONMENT = process.env.DEPLOYMENT_ENV;

const key = process.env.PWN_API_KEY;
const secret = process.env.PWN_API_SECRET;

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

// enum TTestGroupProd {
//   Essential = "2861", // V 1.0 (no Hepatitis C)
//   EssentialNonHIV = "2863", // V 1.0 ( no Hepatitis C)
//   Plus = "2862",
//   PlsNonHIV = "2864"
// }

// enum TTestGroupDev {
//   Essential = "1289", // V 1.0 (no Hepatitis C)
//   EssentialNonHIV = "1368", // V 1.0 ( no Hepatitis C)
//   Plus = "1290",
//   PlsNonHIV = "1369"
// }

const devTests = [
  {
    test_group_id: "1289",
    package_name: "preconception_package_complete",
    sku: "sku_G5y7sdOGX4Q4ZC",
    test_version: 1.0
  },
  {
    test_group_id: "1368",
    package_name: "preconception_package_hiv_not_included",
    sku: "sku_G5y8T3oTt0GfRF",
    test_version: 1.0
  }
];
const prodTests = [
  {
    test_group_id: "2861",
    package_name: "preconception_package_complete",
    sku: "sku_G29myZm1yglTz5",
    test_version: 1.0
  },
  {
    test_group_id: "2863",
    package_name: "preconception_package_hiv_not_included",
    sku: "sku_G29mqI59jjkBJc",
    test_version: 1.0
  }
];

export async function handler(event: any) {
  const data = JSON.parse(event.body);

  const { user_id: target_user_id } = data;

  try {
    let pwnTrueVaultClient: any = new TrueVaultClient({ apiKey: apiKey });

    //@ts-ignore
    let fullTargetUser = await pwnTrueVaultClient.readUser(target_user_id);

    let currentStripePurchaseDetails: TStripePurchase =
      fullTargetUser?.attributes?.stripe_purchases?.[0];

    let testGroupID = testGroupIDPicker(currentStripePurchaseDetails);

    let test_groups = [testGroupID];

    let order = {
      test_groups,
      reference: target_user_id,
      take_tests_same_day: true,
      customer: transformUserProfileIntoCustomer(
        fullTargetUser?.attributes?.profile,
        target_user_id
      )
    };

    let response = await axios({
      method: "post",
      url:
        ENVIRONMENT === "production"
          ? `https://api.pwnhealth.com/v2/labs/orders`
          : `https://api-staging.pwnhealth.com/v2/labs/orders`,
      headers: {
        Authorization: `Bearer ${signedToken}`,
        Accept: "application/json"
      },
      data: {
        order: order
      }
    });

    let pwnOrder: TOrderCreateResponseBody = response.data;

    let currentOrderDocument = Object.assign(
      {},
      {
        owner_id: fullTargetUser?.user_id,
        owner_username: fullTargetUser?.username,
        date_created: Math.floor(Date.now() / 1000),
        date_updated: Math.floor(Date.now() / 1000),
        owner_first_name: fullTargetUser?.attributes?.profile?.first_name,
        owner_last_name: fullTargetUser?.attributes?.profile?.last_name,
        owner_dob: fullTargetUser?.attributes?.profile?.dob,
        pwn_order_id: pwnOrder.order.id,
        stripe_purchase_id: currentStripePurchaseDetails.stripe_purchase_id,
        canceled: false
      },
      { ...pwnOrder }
    );

    let createdDocument = await pwnTrueVaultClient.createDocument(
      PWN_ORDERS_VAULT_ID,
      PWN_ORDERS_SCHEMA_ID,
      currentOrderDocument,
      target_user_id
    );

    let pwnOrderWithFlags = Object.assign({}, createdDocument, {
      stripe_purchase_id: currentStripePurchaseDetails.stripe_purchase_id,
      canceled: false,
      pwn_order_timestamp: new Date(pwnOrder.order.created_at).getTime() / 1000,
      pwn_order_id: pwnOrder.order.id,
      pwn_order_status: pwnOrder.order.status
    });

    let userAttributesWithPWNOrder = addPWNOrderToUserAttributesAndUpdateUserProgressLevel(
      fullTargetUser.attributes,
      pwnOrderWithFlags
    );

    let updatedUser = await pwnTrueVaultClient.updateUserAttributes(
      target_user_id,
      userAttributesWithPWNOrder
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        pwnOrder,
        status: "succeeded"
      })
    };
  } catch (error) {
    console.log("Error creating lab order", error);
    return {
      statusCode: 429,
      body: JSON.stringify({ error, status: "failed" })
    };
  }
}

function testGroupIDPicker(currentStripePurchaseDetails: TStripePurchase) {
  let testPackageList = ENVIRONMENT === "production" ? prodTests : devTests;
  let targetTest = testPackageList.find(
    (testPackage: any) => testPackage.sku === currentStripePurchaseDetails.sku
  );
  return targetTest?.test_group_id;
}

function transformUserProfileIntoCustomer(
  profile: TUserProfile,
  user_id: string
): TRequestCustomer {
  const {
    first_name,
    last_name,
    dob: birth_date,
    phone,
    email,
    line,
    line2,
    city,
    state,
    zip_code
  } = profile;
  let address: TAddress = Object.assign(
    {},
    { line },
    { line2 },
    { city },
    { state },
    { zip: zip_code.toString() }
  );
  const customer: TRequestCustomer = Object.assign(
    {},
    { external_id: user_id },
    { first_name },
    { last_name },
    { birth_date },
    { phone },
    { email },
    { address },
    { gender: "Female" }
  );
  return customer;
}

function addPWNOrderToUserAttributesAndUpdateUserProgressLevel(
  targetUserAttrbiutes: any,
  createdDocument: any
) {
  const updatedUserAttributes = produce(targetUserAttrbiutes, (draft: any) => {
    if (createdDocument) {
      if (draft.pwn_orders.length === 0) {
        draft.pwn_orders.unshift(createdDocument);
        draft.user_progress_level = "ordered";
      } else {
        if (
          draft.pwn_orders.find(
            (pwn_order: any) => pwn_order.pwn_order_status === "cancelled"
          )
        ) {
          draft.pwn_orders = draft.pwn_orders.map((pwn_order: any) => {
            if (pwn_order.pwn_order_status === "cancelled")
              return createdDocument;
            else return pwn_order;
          });
          draft.user_progress_level = "ordered";
        } else {
          draft.pwn_orders.unshift(createdDocument);
          draft.user_progress_level = "ordered";
        }
      }
    } else {
      console.log("Purchase Document Never Created", targetUserAttrbiutes);
      throw new Error("Error, unknown Calendly Event Type");
    }
  });
  return updatedUserAttributes;
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
