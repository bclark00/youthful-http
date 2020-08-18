export type TUserCredentials = {
  access_token?: string;
  user_id?: string;
  username?: string;
  status?: string;
  group_ids?: string[];
};

export type TUserAttributes = {
  app_signup_agreements: TAppSignUpAgreement[];
  app_version?: number;
  beta_agreement_forms: TBetaAgreement[];
  consent_calls: TUserConsentCall[];
  educational_calls: TUserEducationCall[];
  hiv_release_of_records_forms: THIVReleaseOfRecordsForm[];
  hiv_written_consent_forms: THIVWrittenConsentForm[];
  hiv_transmission_consent_forms: THIVTransmissionConsentForm[];
  legal_document_lists: string[] | TLegalDocumentList[];
  profile: TUserProfile;
  purchases: TPurchase[];
  stripe_purchases: any[];
  stripe_refunds: any[];
  pwn_results: any[];
  staff_contacts: TStaffContact[];
  staff_release_of_records: TStaffReleaseOfRecords[];
  standard_release_of_records_forms: TStandardReleaseOfRecordsForm[];
  standard_written_consent_forms: TStandardWrittenConsentForm[];
  user_contacts: TUserContact[];
  user_progress_level?: TProgressLevel;
  user_release_of_records: TUserReleaseOfRecords[];
  purchase_route: "app" | "website";
  results_viewed: boolean;
};

export type TProgressLevel =
  | "registered"
  | "purchased"
  | "ordered"
  | "visited"
  | "processed"
  | "deleted";

export type TUserContact = {
  type: "question" | any;
  sentVia: "app" | "text" | "email";
  timestamp: number;
  content: any;
};

export type TStaffContact = {
  staffMemberName: string;
  type: "reminder" | "followUp";
  sentVia: "email" | "text" | "app";
  timestamp: number;
  content: any;
};

export type TUserConsentCall = {
  staffMemberName: string;
  type: "additionalHIVConsent" | "other";
  timestamp: number;
  notes: string;
};

export type TUserEducationCall = {
  staffMemberName: string;
  type: "call";
  timestamp: number;
  notes: string;
};

export type TAppSignUpAgreement = {
  signup_timestamp: number;
  privacy_policy_checkbox: boolean;
  privacy_policy_version: number;
  terms_of_use_checkbox: boolean;
  terms_of_use_version: number;
};

export type TBetaAgreement = {
  beta_agreement_timestamp: number;
  beta_agreement_checkbox: boolean;
  beta_agreement_version: number;
  beta_agreement_signature: string;
};

export type TStandardWrittenConsentForm = {
  standard_written_consent_checkbox: boolean;
  standard_written_consent_signature: string;
  standard_written_consent_timestamp: number;
  standard_written_consent_version: number;
};

export type THIVTransmissionConsentForm = {
  hiv_transmission_consent_checkbox: boolean;
  hiv_transmission_consent_signature: string;
  hiv_transmission_consent_timestamp: number;
  hiv_transmission_consent_version: number;
};

export type THIVWrittenConsentForm = {
  hiv_written_consent_checkbox: boolean;
  hiv_written_consent_signature: string;
  hiv_written_consent_timestamp: number;
  hiv_written_consent_version: number;
};

export type TStandardReleaseOfRecordsForm = {
  standard_release_of_records_checkbox: boolean;
  standard_release_of_records_signature: string;
  standard_release_of_records_timestamp: number;
  standard_release_of_records_version: number;
  standard_release_of_records_ssn: number;
  standard_release_of_records_name: string;
  standard_release_of_records_organization: string;
  standard_release_of_records_address: string;
  standard_release_of_records_city: string;
  standard_release_of_records_state: string;
  standard_release_of_records_zip_code: string;
  standard_release_of_records_phone: string;
  standard_release_of_records_fax: string;
  standard_release_of_records_email: string;
  standard_release_of_records_dob: Date;
};

export type THIVReleaseOfRecordsForm = {
  hiv_release_of_records_checkbox: boolean;
  hiv_release_of_records_signature: string;
  hiv_release_of_records_timestamp: number;
  hiv_release_of_records_version: number;
  hiv_release_of_records_ssn: string;
};

export type TUserReleaseOfRecords = {
  type: "self-directed";
  sentVia: "eFax";
  timestamp: number;
  content: any;
  status: "succeeded" | "failed" | "disconnected";
};

export type TStaffReleaseOfRecords = {
  type: "user-request" | "provider-request";
  sentVia: "eFax" | "mail";
  timestamp: number;
  content: any;
  status: "succeeded" | "failed" | "disconnected";
};

export type TState =
  | TNormalState
  | TBlacklistedState
  | TVerbalConsentState
  | TAdditionalReleaseofRecordsConsentState
  | TAdditionalHIVConsentState;
export type TNormalState =
  | "AK"
  | "AL"
  | "AR"
  | "AZ"
  | "CA"
  | "CT"
  | "DC"
  | "FL"
  | "GA"
  | "HI"
  | "IA"
  | "ID"
  | "IL"
  | "IN"
  | "KS"
  | "KY"
  | "LA"
  | "MD"
  | "ME"
  | "MI"
  | "MN"
  | "MO"
  | "MS"
  | "MT"
  | "NC"
  | "ND"
  | "NE"
  | "NH"
  | "NM"
  | "NV"
  | "OH"
  | "OK"
  | "OR"
  | "PA"
  | "SC"
  | "SD"
  | "TN"
  | "TX"
  | "UT"
  | "VA"
  | "VT"
  | "WA"
  | "WI"
  | "WV"
  | "WY";

export type TBlacklistedState = "NY" | "NJ" | "RI";

export type TVerbalConsentState = "CO" | "DE" | "MA";

export type TAdditionalHIVConsentState = "MD";

export type TAdditionalReleaseofRecordsConsentState = "MA";

export type TUserProfile = {
  city: string;
  dob: string;
  email: string;
  first_name: string;
  last_name: string;
  line: string;
  line2: string;
  phone: string;
  state: TState;
  zip_code: string;
  ethnicity: string;
  race: string;
  history: string;
};

export type TLegalDocumentList = {
  date_created: number;
  date_updated: number;
  list: List[];
  owner_dob: string;
  owner_first_name: string;
  owner_id: string;
  owner_last_name: string;
  owner_username: string;
  pwn_order_id: number;
  stripe_id: string;
};

type List = {
  filename: string;
  id: string;
  owner_id: string;
  size: string;
};

export type TCalendlyResponse = {
  event: "invitee.created" | "invitee.canceled";
  time: Date;
  payload: Payload;
};

export type Payload = {
  event_type: EventType;
  event: CreatedEvent | CanceledEvent;
  invitee: CreatedInvitee | CanceledInvitee;
  questions_and_answers: QuestionsAndAnswer[];
  questions_and_responses: QuestionsAndResponses;
  tracking: Tracking;
  old_event: TOldEvent | null;
  old_invitee: TOldInvitee | null;
  new_event: null;
  new_invitee: null;
};

export type CreatedEvent = {
  uuid: string;
  assigned_to: string[];
  extended_assigned_to: ExtendedAssignedTo[];
  start_time: Date;
  start_time_pretty: string;
  invitee_start_time: Date;
  invitee_start_time_pretty: string;
  end_time: Date;
  end_time_pretty: string;
  invitee_end_time: Date;
  invitee_end_time_pretty: string;
  created_at: Date;
  location: string;
  canceled: false;
  canceler_name: null;
  cancel_reason: null;
  canceled_at: null;
};

export interface CanceledEvent {
  uuid: string;
  assigned_to: string[];
  extended_assigned_to: ExtendedAssignedTo[];
  start_time: Date;
  start_time_pretty: string;
  invitee_start_time: Date;
  invitee_start_time_pretty: string;
  end_time: Date;
  end_time_pretty: string;
  invitee_end_time: Date;
  invitee_end_time_pretty: string;
  created_at: Date;
  location: string;
  canceled: true;
  canceler_name: string;
  cancel_reason: string;
  canceled_at: Date;
}

export type ExtendedAssignedTo = {
  name: string;
  email: string;
  primary: boolean;
};

export type EventType = {
  uuid: string;
  kind: string;
  slug: string;
  name: string;
  duration: number;
  owner: Owner;
};

export type Owner = {
  type: string;
  uuid: string;
};

export type CreatedInvitee = {
  uuid: string;
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  text_reminder_number: string;
  timezone: string;
  created_at: string;
  is_reschedule: boolean;
  payments: Payment[];
  canceled: false;
  canceler_name: null;
  cancel_reason: null;
  canceled_at: null;
};

export interface CanceledInvitee {
  uuid: string;
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  text_reminder_number: string;
  timezone: string;
  created_at: string;
  is_reschedule: boolean;
  payments: Payment[];
  canceled: true;
  canceler_name: string;
  cancel_reason: string;
  canceled_at: string;
}

export type Payment = {
  id: string;
  provider: string;
  amount: number;
  currency: string;
  terms: string;
  successful: boolean;
};

export type QuestionsAndAnswer = {
  question: string;
  answer: string;
};

export type QuestionsAndResponses = {
  "1_question": string;
  "1_response": string;
  "2_question": string;
  "2_response": string;
  "3_question": string;
  "3_response": string;
  "4_question": string;
  "4_response": string;
};

export type Tracking = {
  utm_campaign: null;
  utm_source: null;
  utm_medium: null;
  utm_content: null;
  utm_term: null;
  salesforce_uuid: null;
};

export type TOldEvent = {
  uuid: string;
  assigned_to: string[];
  extended_assigned_to: ExtendedAssignedTo[];
  start_time: string;
  start_time_pretty: string;
  invitee_start_time: string;
  invitee_start_time_pretty: string;
  end_time: string;
  end_time_pretty: string;
  invitee_end_time: string;
  invitee_end_time_pretty: string;
  created_at: string;
  location: string;
  canceled: boolean;
  canceler_name: null | string;
  cancel_reason: null | string;
  canceled_at: null | string;
};

export type TOldInvitee = {
  uuid: string;
  first_name: null;
  last_name: null;
  name: string;
  email: string;
  text_reminder_number: null;
  timezone: string;
  created_at: string;
  is_reschedule: boolean;
  payments: any[];
  canceled: boolean;
  canceler_name: null | string;
  cancel_reason: null | string;
  canceled_at: null | string;
};

export type TPurchaseStatus =
  | "fulfilled"
  | "unfulfilled"
  | "cancelled"
  | "refunded";

export type TPurchase = {
  fulfillment_timestamp: number;
  purchase_timestamp: number;
  purchase_status: TPurchaseStatus;
  amount: number;
  currency: string;
  quantity: number;
  sku: Sku;
  type: string;
  stripe_id: string;
  payment_intent: string;
  refund_data?: TRefund;
};

export type TRefund = {
  id: string;
  object: string;
  amount: number;
  balance_transaction: string;
  charge: string;
  created: number;
  currency: string;
  metadata: Metadata;
  reason: null;
  receipt_number: null;
  source_transfer_reversal: null;
  status: string;
  transfer_reversal: null;
};

export type TStripeSession = {
  id: string;
  object: string;
  billing_address_collection: null;
  cancel_url: string;
  client_reference_id: string;
  customer: string;
  customer_email: null;
  display_items: TDisplayItem[];
  livemode: boolean;
  locale: null;
  mode: string;
  payment_intent: string;
  payment_method_types: string[];
  setup_intent: null;
  submit_type: null;
  subscription: null;
  success_url: string;
};

export type TDisplayItem = {
  amount: number;
  currency: string;
  quantity: number;
  sku: Sku;
  type: string;
};

type Sku = {
  id: string;
  object: string;
  active: boolean;
  attributes: SkuAttributes;
  created: number;
  currency: string;
  image: string;
  inventory: Inventory;
  livemode: boolean;
  metadata: Metadata;
  package_dimensions: null;
  price: number;
  product: string;
  updated: number;
};

type SkuAttributes = {
  name: string;
};

type Inventory = {
  quantity: null;
  type: string;
  value: null;
};

type Metadata = {};

export type TInternalTest = {
  test_group_id: TTestGroupProd | TTestGroupDev;
  package_name: string;
  sku: string;
  test_version: number;
};

export type TOrderCreateBody = {
  order: TOrderCreate;
};

export type TOrderCreate = {
  test_groups: TTestGroupDev[] | TTestGroupProd[];
  reference: string; // user_id
  take_tests_same_day: true;
  customer: TRequestCustomer;
};

export enum TTestGroupProd {
  Essential = "2861", // V 1.0 (no Hepatitis C)
  EssentialNonHIV = "2863", // V 1.0 ( no Hepatitis C)
  Plus = "2862",
  PlsNonHIV = "2864"
}

export enum TTestGroupDev {
  Essential = "1289", // V 1.0 (no Hepatitis C)
  EssentialNonHIV = "1368", // V 1.0 ( no Hepatitis C)
  Plus = "1290",
  PlsNonHIV = "1369"
}

// Essential - 1289
// Essential- Non HIV - 1368
// Plus - 1290
// Plus- Non HIV - 1369

export type TRequestCustomer = {
  external_id: string; // user_id
  first_name: string;
  last_name: string;
  birth_date: string; // YYYY-MM-DD
  gender: "Female";
  phone: string;
  email: string;
  address: TAddress;
};

export type TAddress = {
  line: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
};

export interface TOrderCreateResponseBody {
  order: TOrderCreateResponse;
}

export interface TOrderCreateResponse {
  id: string;
  status: string;
  confirmation_code: string;
  account_number: string;
  draw_location: string;
  take_tests_same_day: boolean;
  customer: TOrdCreateCustomer;
  tests: any[];
  test_groups: TTestGroupDev[] | TTestGroupProd[];
  clinical_note: null;
  reference: string;
  test_disclaimer_ids: any[];
  prior_genetic_testing: null;
  medication_list: null;
  custom_attributes: null;
  created_at: string;
  updated_at: string;
  expires_at: string;
  recollection_id: null;
  grouping: null;
  subscription_id: null;
  lab_acknowledged_on: null;
  links: Links;
  physician_review: PhysicianReview;
}

export type TOrdCreateCustomer = {
  external_id: string;
  first_name: string;
  last_name: string;
  birth_date: string; // "YYYY-MM-DD"
  gender: string; // "Female"
  country_code: string; // "+1"
  phone: string; // "XXX-XXX-XXXX"
  sms_opted_in: boolean;
  email: string;
  address: TAddress;
};

export type TOrderUpdateResponseBody = {
  order: ResponseOrder;
};

export type ResponseOrder = {
  id: number;
  status: "approved" | "cancelled" | "rejected" | "approval_pending";
  cancelation_reason?: string;
  confirmation_code: string;
  account_number: string;
  draw_location: string;
  take_tests_same_day: boolean;
  customer: TOrderUpdateResponseCustomer;
  tests: any[];
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
  recollection_id: null;
  grouping: string;
  subscription_id: null;
  lab_acknowledged_on: null;
  links: Links;
  physician_review: PhysicianReview;
  results: Results;
};

export type TOrderUpdateResponseCustomer = {
  external_id: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  country_code: string;
  phone: string;
  sms_opted_in: boolean;
  email: string;
  address: TAddress;
};

export type Links = {
  ui_customer: string;
};

export type PhysicianReview = {
  name: string;
  upin: string;
  npi: string;
  reviewed_at: string | null;
};

export type Results = {
  format: string;
  summary: Summary;
  final_results: FinalResult[];
  analytes: Analyte[];
};

export type Analyte = {
  order_lab_code: string;
  order_lab_name: string;
  result_lab_code: string;
  result_lab_name: string;
  lab_abnormal_flag: AbnormalFlag;
  client_abnormal_flag: null;
  abnormal_flag: AbnormalFlag;
  released: boolean;
  priority: number | null;
  order_friendly_name: null;
  result_friendly_name: null | string;
  analyte_grouping: AnalyteGrouping | null;
  title: null | string;
  status: Status;
  range_type: RangeType | null;
  basic_information: string[] | null;
  parents: any[];
  reference_ranges: any[];
  result_explanations: any[];
  additional_information: any[];
  released_at: string;
  result_status: ResultStatus;
  value: string;
  value_unit: null | string;
  observed_at: string;
  notes: null;
  lab_reference_range: string;
  value_type: ValueType;
};

export enum AbnormalFlag {
  N = "N"
}

export enum AnalyteGrouping {
  SingleResult = "SINGLE_RESULT"
}

export enum RangeType {
  PositiveAbnormal = "POSITIVE_ABNORMAL",
  ReferenceRange = "REFERENCE_RANGE"
}

export type ResultStatus = "incomplete" | "pending" | "resolved";

export enum Status {
  Normal = "normal"
}

export enum ValueType {
  Nm = "NM"
}

export type FinalResult = {
  result_lab_code: string;
  order_lab_code: string;
};

export type Summary = {
  outreach_required: boolean;
  outreach_performed_by_client: boolean;
  complete: boolean;
  status: string;
  abnormal_flag: boolean;
  sample_collected_at: string;
  released_at: string;
};

export type TTestResult = {
  resultValueType: "number" | "string";
  status: "Normal" | "Abnormal" | "Caution";
  title: string;
  subtitle: string;
  result_unit: string;
  result_value: number;
  result_bottom_value?: number;
  result_middle_value?: number;
  result_top_value?: number;
  range_labels: string[];
  result_description: string;
};

export type TResultStatus = "incomplete" | "pending" | "resolved";

export type TResult = {
  test_package: "Essential" | "Plus";
  test_package_version: number;
  lab_visit_timestamp: number;
  result_status: TResultStatus;
  results_released: boolean;
  results_viewed: boolean;
  list_of_results: TTestResult[];
};

export type TUserConditionals = {
  HIVReleaseOfRecordsSigned: boolean;
  HIVWrittenConsentLatestVersion: boolean;
  HIVWrittenConsentSigned: boolean;
  additionalVerbalHIVConsentCallCanceled: boolean;
  additionalVerbalHIVConsentCallComplete: boolean;
  additionalVerbalHIVConsentCallScheduled: boolean;
  additionalVerbalHIVConsentState: boolean;
  additionalWrittenHIVConsentState: boolean;
  editable: boolean;
  educationalCallCanceled: boolean;
  educationalCallComplete: boolean;
  educationalCallScheduled: boolean;
  profileComplete: boolean;
  readyToPurchase: boolean;
  repeatCustomer: boolean;
  resultsHaveBeenViewed: boolean;
  resultsOnHold: boolean;
  resultsReadyToView: boolean;
  resultsReleased: boolean;
  standardReleaseOfRecordsSigned: boolean;
  standardWrittenConsentLatestVersion: boolean;
  standardWrittenConsentSigned: boolean;
  unpurchaseable: boolean;
  webPurchaseComplete: boolean;
};

// Generated by https://quicktype.io
