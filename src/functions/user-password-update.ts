import TrueVaultClient from "truevault";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

export async function handler(event: any, context: any) {
  const data = JSON.parse(event.body);
  const { access_token } = data;

  try {
    const auth = await new TrueVaultClient({ accessToken: access_token });
    // The new Client endpoint doesn't return user attributes. We need those to get the user's name and role, so
    // we load the full user object.

    // let fullUser: any = await auth.updateUserPassword();

    // const {
    //   access_key,
    //   account_id,
    //   external_key_hash,
    //   id,
    //   status,
    //   group_ids,
    //   ...user
    // } = fullUser;

    // console.log(fullUser);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        // user,
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
      }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
