import TrueVaultClient from "truevault";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

//truevault.github.io/truevault-js-sdk/

const APP_VERSION = process.env.APP_VERSION;
const GROUP_ID = process.env.GROUP_ID;
const REG_KEY = process.env.REG_KEY;

const createUserTvClient = new TrueVaultClient({
  apiKey: REG_KEY
});

export async function handler(event: any) {
  const data = JSON.parse(event.body);
  let { email, password, attributes } = data;

  const initialAttributes = {
    app_version: APP_VERSION,
    consent_calls: [],
    educational_calls: [],
    legal_document_lists: [],
    stripe_purchases: [],
    stripe_refunds: [],
    pwn_results: [],
    pwn_orders: [],
    staff_contact_logs: [],
    staff_release_of_records: [],
    user_contact_logs: [],
    user_release_of_records: [],
    user_progress_level: "registered",
    purchase_route: "app",
    profile_picture: "url"
  };

  // create initial attributes

  const updatedAttributes = Object.assign({}, initialAttributes, attributes);

  try {
    const newUser: any = await createUserTvClient.createUser(
      email,
      password,
      updatedAttributes,
      [GROUP_ID]
    );

    const auth: any = new TrueVaultClient({
      accessToken: newUser.access_token
    });
    // The new Client endpoint doesn't return user attributes. We need those to get the user's name and role, so we load the full user object.
    const fullUser: any = await auth.readCurrentUser();

    const { access_key, account_id, external_key_hash, id, ...user } = fullUser;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        access_token: newUser.access_token,
        user,
        status: "succeeded"
      })
    };
  } catch (error) {
    console.log("TrueVault User Creation Error: ", error);
    return {
      headers,
      statusCode: 400,
      body: JSON.stringify({
        error,
        status: "failed"
      })
    };
  }
}
