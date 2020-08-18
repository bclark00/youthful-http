import TrueVaultClient from "truevault";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

const accountID = "d3eec872-7b80-499d-b67d-b2ab2ebdaf0c";

export async function handler(event: any) {
  const data = JSON.parse(event.body);
  const { email, password } = data;
  try {
    // password auth client
    //emailusername chosen due to naming conflicts
    const auth: any = await TrueVaultClient.login(accountID, email, password);

    const { _accessToken: access_token } = auth;

    // The login endpoint doesn't return user attributes. We need those to get the user's name and role, so we load the full user object.

    const fullUser = await auth.readCurrentUser();

    // Stripping Uneeded data

    const { access_key, account_id, external_key_hash, id, ...user } = fullUser;

    return {
      statusCode: 200,
      body: JSON.stringify({
        access_token,
        user,
        status: "succeeded",
        connected: true,
        authenticated: true
      })
    };
  } catch (error) {
    console.log("LogIn Failed: Transaction ID", error.transaction_id);
    console.log("ERROR", error); // output to netlify function log
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        error,
        connected: true,
        authenticated: false,
        status: "failed"
      })
    };
  }
}
