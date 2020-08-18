const CryptoJS = require("crypto-js");
import produce from "immer";
import TrueVaultClient from "truevault";
import { TOrderCreateResponseBody } from "../features/Attributes/Store/types";

const ENVIRONMENT = process.env.DEPLOYMENT_ENV;

const apiKey =
  ENVIRONMENT === "production"
    ? process.env.TRUEVAULT_PWN_KEY
    : process.env.TRUEVAULT_FULL_ADMIN_KEY;

const PWN_ORDERS_SCHEMA_ID =
  ENVIRONMENT === "production"
    ? process.env.PWN_ORDERS_SCHEMA_ID
    : "f72d6f58-f248-4d81-96f4-f687fc511db4";

const PWN_ORDERS_VAULT_ID =
  ENVIRONMENT === "production"
    ? process.env.PWN_ORDERS_VAULT_ID
    : "9d0c4cd6-4a1f-4cd0-929c-181ac7947ac0";

export async function handler(event: any) {
  const data: TOrderCreateResponseBody = JSON.parse(event.body);

  const { order } = data;

  let target_user_id = order.customer.external_id;

  try {
    let pwnTrueVaultClient: any = new TrueVaultClient({ apiKey: apiKey });

    let fullTargetUser = await pwnTrueVaultClient.readUser(target_user_id);

    let currentPWNOrderArray = fullTargetUser?.attributes?.pwn_orders?.filter(
      // filter out canceled orders
      (pwn_order: any) => pwn_order.canceled === false
    );

    let currentPWNOrder = currentPWNOrderArray[0];

    let documentList = await pwnTrueVaultClient.getDocuments(
      PWN_ORDERS_VAULT_ID,
      [currentPWNOrder.id]
    );

    let currentPWNOrderDocument = documentList.find(
      (document: any) => document.id === currentPWNOrder.id
    );

    let updatedOrderDocument = Object.assign(
      {},
      { ...currentPWNOrderDocument.document },
      {
        date_updated: Math.floor(Date.now() / 1000)
      },
      { order: order }
    );

    let updatedDocument = await pwnTrueVaultClient.updateDocument(
      PWN_ORDERS_VAULT_ID,
      currentPWNOrder.id,
      updatedOrderDocument,
      target_user_id,
      PWN_ORDERS_SCHEMA_ID
    );

    let pwnOrderWithFlags = Object.assign(
      {},
      currentPWNOrder,
      updatedDocument,
      {
        pwn_order_status: order.status
      }
    );

    let userAttributesWithPWNOrder = updateUserAttributesWithUpdatedPWNOrder(
      fullTargetUser.attributes,
      pwnOrderWithFlags
    );

    await pwnTrueVaultClient.updateUserAttributes(
      target_user_id,
      userAttributesWithPWNOrder
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "succeeded"
      })
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 429,
      body: JSON.stringify({ error, status: "failed" })
    };
  }
}

function updateUserAttributesWithUpdatedPWNOrder(
  targetUserAttrbiutes: any,
  createdDocument: any
) {
  const updatedUserAttributes = produce(targetUserAttrbiutes, (draft: any) => {
    if (createdDocument) {
      draft.pwn_orders = draft.pwn_orders.map((pwn_order: any) =>
        pwn_order.id === createdDocument.id ? createdDocument : pwn_order
      );
    } else {
      console.log("PWN Order Document Never Updated");
      throw new Error(
        "Error, updating user attributes pwn order with approved status failed"
      );
    }
  });
  return updatedUserAttributes;
}
