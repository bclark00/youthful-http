import TrueVaultClient from "truevault";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

export async function handler(event: any) {
  const data = JSON.parse(event.body);
  const { access_token } = data;
  try {
    const auth = await new TrueVaultClient({ accessToken: access_token });
    await auth.logout();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: "succeeded",
        connected: true,
        authenticated: true
      })
    };
  } catch (error) {
    console.log("LogOut Failed: Transaction ID", error.transaction_id);
    console.log("ERROR", error); // output to netlify function log
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        connected: true,
        authenticated: false,
        status: "failed"
      })
    };
  }
}
