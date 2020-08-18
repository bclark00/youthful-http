import { produce } from "immer";
import TrueVaultClient from "truevault";

const apiKey = process.env.TRUEVAULT_CALENDLY_KEY;

const CALENDLY_CALLS_SCHEMA_ID = process.env.CALENDLY_CALLS_SCHEMA_ID;
const CALENDLY_CALLS_VAULT_ID = process.env.CALENDLY_CALLS_VAULT_ID;
export async function handler(event: any) {
  let data: TCalendlyResponse = JSON.parse(event.body);

  // console.log("DATA", data);

  let searchOptions = {
    filter: {
      "$tv.username": {
        type: "eq",
        value: data.payload.invitee.email,
        case_sensitive: false
      }
    }
  };

  const calendlyTrueVaultClient: any = new TrueVaultClient({ apiKey: apiKey });

  //@ts-ignore
  let targetUserResults: TUserSearchResponse = await calendlyTrueVaultClient.searchUsers(
    searchOptions
  );

  let targetUser = targetUserResults.documents.find(
    user => user.status === "ACTIVATED"
  );

  let fullTargetUser = await calendlyTrueVaultClient.readUser(
    //@ts-ignore
    targetUser.user_id
  );

  let updatedEventDocument = Object.assign(
    {},
    {
      assigned_to: data.payload.event.assigned_to,
      invitee_username: data.payload.invitee.email,
      calendly_event_type: data.payload.event_type.slug,
      calendy_event_name: data.payload.event_type.name,
      canceled: data.payload.invitee.canceled,
      calendly_event_uuid: data.payload.event.uuid,
      pwn_order_id: fullTargetUser?.attributes.pwn_orders[0].pwn_order_id,
      stripe_purchase_id:
        fullTargetUser?.attributes.stripe_purchases[0].stripe_purchase_id
    },
    { ...data.payload }
  );

  let targetEventDocumentID = findTargetDocumentID(
    data,
    fullTargetUser.attributes
  );

  let createdDocument = await calendlyTrueVaultClient.updateDocument(
    CALENDLY_CALLS_VAULT_ID,
    targetEventDocumentID,
    updatedEventDocument,
    targetUser?.user_id,
    CALENDLY_CALLS_SCHEMA_ID
  );

  let updatedAttributesWithCancelledEventRemoved = changeEventCanceledStatusInUserAttributes(
    data,
    fullTargetUser.attributes,
    createdDocument
  );

  let updatedUserWithCanceledEventRemoved = await calendlyTrueVaultClient.updateUserAttributes(
    //@ts-ignore
    targetUser.user_id,
    updatedAttributesWithCancelledEventRemoved
  );

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        createdDocument,
        status: "succeeded",
        connected: true,
        authenticated: true
      })
    };
  } catch (error) {
    console.log("error", error);
  }
}

function changeEventCanceledStatusInUserAttributes(
  data: TCalendlyResponse,
  targetUserAttrbiutes: any,
  createdDocument: any
) {
  const updatedUserAttributes = produce(targetUserAttrbiutes, (draft: any) => {
    if (data.payload.event_type.slug === "consent-approval") {
      draft.consent_calls = draft.consent_calls.map((consent_call: any) =>
        consent_call.id === createdDocument.id
          ? Object.assign({}, { ...consent_call }, { canceled: true })
          : consent_call
      );
    } else if (data.payload.event_type.slug === "call") {
      draft.educational_calls = draft.educational_calls.map(
        (educational_call: any) =>
          educational_call.id === createdDocument.id
            ? Object.assign({}, { ...educational_call }, { canceled: true })
            : educational_call
      );
    } else {
      console.log(
        "Error, unknown Calendly Event Type: ",
        data.payload.event_type
      );
      throw new Error("Error, unknown Calendly Event Type");
    }
  });
  return updatedUserAttributes;
}

// function removeEventFromUserAttributes(
//   data: TCalendlyResponse,
//   targetUserAttrbiutes: any,
//   createdDocument: any
// ) {
//   const updatedUserAttributes = produce(targetUserAttrbiutes, (draft: any) => {
//     if (data.payload.event_type.slug === "consent-approval") {
//       draft.consent_calls = arrayRemove(
//         draft.consent_calls,
//         createdDocument.id
//       );
//     } else if (data.payload.event_type.slug === "educational-call") {
//       draft.educational_calls = arrayRemove(
//         draft.educational_calls,
//         createdDocument.id
//       );
//     } else {
//       console.log("Error, unknown Calendly Event Type");
//       throw new Error("Error, unknown Calendly Event Type");
//     }
//   });
//   return updatedUserAttributes;
// }

function arrayRemove(array: any, value: any) {
  return array.filter(function(element: any) {
    return element.id !== value;
  });
}

function findTargetDocumentID(
  data: TCalendlyResponse,
  targetUserAttrbiutes: any
) {
  if (data.payload.event_type.slug === "consent-approval") {
    return targetUserAttrbiutes.consent_calls[0].id;
  } else if (data.payload.event_type.slug === "educational-call") {
    return targetUserAttrbiutes.educational_calls[0].id;
  } else {
    console.log("Error, unknown Calendly Event Type");
    throw new Error("Error, unknown Calendly Event Type");
  }
}

type TCalendlyResponse = {
  event: "invitee.created" | "invitee.canceled";
  time: Date;
  payload: Payload;
};

type Payload = {
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

type CreatedEvent = {
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

interface CanceledEvent {
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

type ExtendedAssignedTo = {
  name: string;
  email: string;
  primary: boolean;
};

type EventType = {
  uuid: string;
  kind: string;
  slug: string;
  name: string;
  duration: number;
  owner: Owner;
};

type Owner = {
  type: string;
  uuid: string;
};

type CreatedInvitee = {
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

interface CanceledInvitee {
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

type Payment = {
  id: string;
  provider: string;
  amount: number;
  currency: string;
  terms: string;
  successful: boolean;
};

type QuestionsAndAnswer = {
  question: string;
  answer: string;
};

type QuestionsAndResponses = {
  "1_question": string;
  "1_response": string;
  "2_question": string;
  "2_response": string;
  "3_question": string;
  "3_response": string;
  "4_question": string;
  "4_response": string;
};

type Tracking = {
  utm_campaign: null;
  utm_source: null;
  utm_medium: null;
  utm_content: null;
  utm_term: null;
  salesforce_uuid: null;
};

type TOldEvent = {
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

type TOldInvitee = {
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

type TUserSearchResponse = {
  info: {
    current_page: 1;
    num_pages: 1;
    per_page: 100;
    total_result_count: 7;
  };
  documents: TUserDocument[];
};

type TUserDocument = {
  id: string;
  status: "ACTIVATED" | "DEACTIVATED";
  user_id: string;
  username: string;
};
