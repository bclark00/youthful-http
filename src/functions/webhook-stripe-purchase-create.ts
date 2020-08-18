import produce from "immer";
import Stripe from "stripe";
import TrueVaultClient from "truevault";

const apiKey = process.env.TRUEVAULT_STRIPE_KEY; // DEV/TESTING ONLY

const STRIPE_KEY = process.env.STRIPE_KEY;

const STRIPE_PURCHASES_VAULT_ID = process.env.STRIPE_PURCHASES_VAULT_ID;
const STRIPE_PURCHASES_SCHEMA_ID = process.env.STRIPE_PURCHASES_SCHEMA_ID;

const STRIPE_ENDPOINT_SECRET = process.env.STRIPE_ENDPOINT_SECRET;

export async function handler(event: any) {
  const sig = event.headers["stripe-signature"];
  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  //@ts-ignore
  const stripe = Stripe(STRIPE_KEY);
  // Find your endpoint's secret in your Dashboard's webhook settings
  let endpointSecret = STRIPE_ENDPOINT_SECRET;

  try {
    let stripeTrueVaultClient: any = new TrueVaultClient({ apiKey: apiKey });

    let stripeData = stripe.webhooks.constructEvent(
      event.body,
      sig,
      endpointSecret
    );
    if (stripeData.type === "checkout.session.completed") {
      let session = stripeData.data.object;
      let {
        client_reference_id,
        display_items,
        id: purchase_id,
        payment_intent
      } = session;

      let searchOptions = {
        filter: {
          "$tv.id": {
            type: "eq",
            value: client_reference_id
          }
        }
      };

      try {
        // find user

        //@ts-ignore
        let targetUserResults: TUserSearchResponse = await stripeTrueVaultClient.searchUsers(
          searchOptions
        );

        let targetUser = targetUserResults.documents.find(
          user => user.status === "ACTIVATED"
        );

        let fullTargetUser = await stripeTrueVaultClient.readUser(
          //@ts-ignore
          targetUser?.user_id
        );

        let purchaseDetails = display_items[0];

        let currentPurchaseDocument = Object.assign(
          {},
          {
            owner_id: fullTargetUser?.user_id,
            owner_username: fullTargetUser?.username,
            date_created: Math.floor(Date.now() / 1000),
            date_updated: Math.floor(Date.now() / 1000),
            owner_first_name: fullTargetUser?.attributes?.profile?.first_name,
            owner_last_name: fullTargetUser?.attributes?.profile?.last_name,
            owner_dob: fullTargetUser?.attributes?.profile?.dob,
            purchase_status: "unfulfilled"
          },
          { details: { ...purchaseDetails } }
        );

        let createdDocument = await stripeTrueVaultClient.createDocument(
          STRIPE_PURCHASES_VAULT_ID,
          STRIPE_PURCHASES_SCHEMA_ID,
          currentPurchaseDocument,
          //@ts-ignore
          targetUser.user_id
        );

        let purchaseWithFlags = Object.assign({}, createdDocument, {
          purchase_status: "unfulfilled",
          payment_intent: payment_intent,
          stripe_purchase_id: purchase_id,
          sku: purchaseDetails.sku.id,
          canceled: false,
          purchase_timestamp: new Date().getTime() / 1000
        });

        let userAttributesWithPurchase = addPurchaseToUserAttributesAndUpdateUserProgressLevel(
          fullTargetUser.attributes,
          purchaseWithFlags
        );

        let updatedUser = await stripeTrueVaultClient.updateUserAttributes(
          //@ts-ignore
          targetUser.user_id,
          userAttributesWithPurchase
        );

        return {
          statusCode: 200,
          body: JSON.stringify({
            updatedUser,
            received: true
          })
        };
      } catch (error) {
        console.log("Purchase Fulfillment Error", error);
      }
      console.log("Stripe Purchase Constructed", stripeData);
    } else {
      return {
        statusCode: 429,
        body: JSON.stringify({
          received: false
        })
      };
    }
  } catch (error) {
    console.log(`Webhook Error: ${error.message}`);
    return {
      statusCode: 429,
      body: JSON.stringify(error)
    };
  }
}

function addPurchaseToUserAttributesAndUpdateUserProgressLevel(
  targetUserAttrbiutes: any,
  createdDocument: any
) {
  const updatedUserAttributes = produce(targetUserAttrbiutes, (draft: any) => {
    if (createdDocument) {
      draft.stripe_purchases.unshift(createdDocument);
      draft.user_progress_level = "purchased";
    } else {
      console.log("Purchase Document Never Created");
      throw new Error("Error, unknown Calendly Event Type");
    }
  });
  return updatedUserAttributes;
}

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
