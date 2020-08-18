import TrueVaultClient from "truevault";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

export async function handler(event: any) {
  const data = JSON.parse(event.body);
  const { password, httpAuth, user_id } = data;
  const tvClient = new TrueVaultClient({
    httpBasic: httpAuth
  });

  try {
    const response = await tvClient.updateUserPassword(user_id, password);


    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response,
        status: "succeeded",
        connected: true,
        authenticated: true
      })
    };
  } catch (error) {
    console.log("Password Reset Failed: Transaction ID", error.transaction_id);
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
