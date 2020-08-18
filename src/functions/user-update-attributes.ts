import TrueVaultClient from "truevault";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

export async function handler(event: any) {
  const data = JSON.parse(event.body);

  const { access_token, user_id, attributes: desiredAttributes } = data;

  const updateUserTvClient: any = new TrueVaultClient({
    accessToken: access_token
  });

  const readUserTvClient: any = new TrueVaultClient({
    accessToken: access_token
  });

  const currentUser = await readUserTvClient.readUser(user_id);

  const { attributes } = currentUser;

  const updatedAttributes = Object.assign({}, attributes, desiredAttributes);

  try {
    await updateUserTvClient.updateUserAttributes(user_id, updatedAttributes);

    const user = await updateUserTvClient.readCurrentUser();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        user,
        status: "succeeded",
        connected: true,
        authenticated: true
      })
    };
  } catch (error) {
    console.log(error); // output to netlify function log
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
