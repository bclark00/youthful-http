import TrueVaultClient from "truevault";

const ENVIROMENT = process.env.DEPLOYMENT_ENV;

const apiKey = process.env.TRUEVAULT_FULL_ADMIN_KEY;

const accountSid = "ACf18fab5c57dde074d4f5f493a5e8791c";
const authToken = "498574525cd42a9d7e51ff166c027bf9";
const client = require("twilio")(accountSid, authToken);

export async function handler(event: any) {
  let pwnTrueVaultClient: any = new TrueVaultClient({ apiKey: apiKey });

  try {
    let target_user_id = "123-123-123";
    interface TwilioData {
      sid: string;
      friendly_name: string;
      date_created: string;
      date_updated: string;
      secret: string;
    }

    let twilioData: TwilioData = await client.newKeys.create();

    // console.log(twilioReponse);

    // let twilioData: TwilioData = await twilioReponse.json();

    let smsAlertMessage = await pwnTrueVaultClient.sendSMSTwilio(
      "ACf18fab5c57dde074d4f5f493a5e8791c",
      twilioData.sid,
      twilioData.secret,
      "a2ab13e3-b73a-4bd4-ace3-536bd49a99ae",
      { literal_value: "+12132773112" },
      { user_attribute: "phone" },
      `Abnormal result released. User id: ${target_user_id}, pwn_order_id: 299480`,
      []
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: smsAlertMessage,
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
