import produce from "immer";
import TrueVaultClient from "truevault";
import { TOrderCreateResponseBody } from "../features/Attributes/Store/types";

const apiKey = process.env.TRUEVAULT_FULL_ADMIN_KEY;

const PWN_ORDERS_SCHEMA_ID = "f72d6f58-f248-4d81-96f4-f687fc511db4";

const PWN_ORDERS_VAULT_ID = "9d0c4cd6-4a1f-4cd0-929c-181ac7947ac0";

const STRIPE_PURCHASES_VAULT_ID = "8d293cb9-d70a-4d20-acf0-78db2bfb03c6";

const STRIPE_PURCHASES_SCHEMA_ID = "d1af41ab-13de-44e2-b4f4-18ca146c5452";

export async function handler(event: any) {
  const data: TOrderCreateResponseBody = JSON.parse(event.body);

  const { order } = data;

  let target_user_id = order.customer.external_id;

  try {
    let pwnTrueVaultClient: any = new TrueVaultClient({ apiKey: apiKey });

    console.log(pwnTrueVaultClient);

    let fullTargetUser = await pwnTrueVaultClient.readUser(target_user_id);

    let currentPWNOrderArray = fullTargetUser?.attributes?.pwn_orders?.filter(
      // filter out canceled orders
      (pwn_order: any) => pwn_order.canceled === false
    );

    let currentStripePurchaseArray = fullTargetUser?.attributes?.stripe_purchases?.filter(
      // filter out canceled orders
      (stripe_purchase: any) => stripe_purchase.canceled === false
    );

    let currentPWNOrder = currentPWNOrderArray[0];

    let currentStripePurchase = currentStripePurchaseArray[0];

    let pwnOrderDocumentList = await pwnTrueVaultClient.getDocuments(
      PWN_ORDERS_VAULT_ID,
      [currentPWNOrder.id]
    );

    let stripePurchaseDocumentList = await pwnTrueVaultClient.getDocuments(
      STRIPE_PURCHASES_VAULT_ID,
      [currentStripePurchase.id]
    );

    let currentPWNOrderDocument = pwnOrderDocumentList.find(
      (document: any) => document.id === currentPWNOrder.id
    );

    let currentStripePurchaseDocument = stripePurchaseDocumentList.find(
      (document: any) => document.id === currentStripePurchase.id
    );

    let updatedOrderDocument = Object.assign(
      {},
      { ...currentPWNOrderDocument.document },
      {
        date_updated: Math.floor(Date.now() / 1000)
      },
      { order: order }
    );

    let updatedPurchaseDocument = Object.assign(
      {},
      { ...currentStripePurchaseDocument.document },
      {
        date_updated: Math.floor(Date.now() / 1000),
        purchase_status: "fulfilled"
      }
    );

    let updatedPWNOrderDocument = await pwnTrueVaultClient.updateDocument(
      PWN_ORDERS_VAULT_ID,
      currentPWNOrder.id,
      updatedOrderDocument,
      target_user_id,
      PWN_ORDERS_SCHEMA_ID
    );

    let updatedStripePurchaseDocument = await pwnTrueVaultClient.updateDocument(
      STRIPE_PURCHASES_VAULT_ID,
      currentStripePurchase.id,
      updatedPurchaseDocument,
      target_user_id,
      STRIPE_PURCHASES_SCHEMA_ID
    );

    let pwnOrderWithFlags = Object.assign(
      {},
      currentPWNOrder,
      updatedPWNOrderDocument,
      {
        pwn_order_status: order.status
      }
    );

    let stripePurchaseWithFlags = Object.assign(
      {},
      currentStripePurchase,
      updatedStripePurchaseDocument,
      {
        purchase_status: "fulfilled"
      }
    );

    let userAttributesWithUpdatedPWNOrderAndStripePurchase = updateUserAttributesWithUpdatedPWNOrder(
      fullTargetUser.attributes,
      pwnOrderWithFlags,
      stripePurchaseWithFlags
    );

    await pwnTrueVaultClient.updateUserAttributes(
      target_user_id,
      userAttributesWithUpdatedPWNOrderAndStripePurchase
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "succeeded"
      })
    };
  } catch (error) {
    console.log(
      `Error updating pwn order, target user id: ${target_user_id}`,
      error
    );
    return {
      statusCode: 429,
      body: JSON.stringify({ error, status: "failed" })
    };
  }
}

function updateUserAttributesWithUpdatedPWNOrder(
  targetUserAttributes: any,
  pwnOrderWithFlags: any,
  stripePurchaseWithFlags: any
) {
  const updatedUserAttributes = produce(targetUserAttributes, (draft: any) => {
    if (pwnOrderWithFlags && stripePurchaseWithFlags) {
      draft.pwn_orders = draft.pwn_orders.map((pwn_order: any) =>
        pwn_order.id === pwnOrderWithFlags.id ? pwnOrderWithFlags : pwn_order
      );
      draft.stripe_purchases = draft.stripe_purchases.map(
        (stripe_purchase: any) =>
          stripe_purchase.id === stripePurchaseWithFlags.id
            ? stripePurchaseWithFlags
            : stripe_purchase
      );
    } else {
      console.log("PWN Order Document Never Updated", targetUserAttributes);
      throw new Error(
        "Error, updating user attributes pwn order with approved status failed"
      );
    }
  });
  return updatedUserAttributes;
}
