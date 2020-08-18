import axios from "axios";
import TrueVaultClient from "truevault";
const Blob = require("node-blob");
const CryptoJS = require("crypto-js");
const InterFAX = require("interfax");
const toArray = require("stream-to-array");
const util = require("util");

const ENVIROMENT = process.env.DEPLOYMENT_ENV;

// const key = "bdc87ab40eb6310db805afdeb230e873";
// const secret = "1c04ed5f7542cc74643437f207658739";

const key = process.env.PWN_API_KEY;
const secret = process.env.PWN_API_SECRET;

// This doesn't need to be modified.
function base64url(source: any) {
  // Encode in classical base64
  let encodedSource = CryptoJS.enc.Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, "");

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, "-");
  encodedSource = encodedSource.replace(/\//g, "_");

  return encodedSource;
}

function payload() {
  var now = Math.floor(Date.now() / 1000 - 1000);
  let content: any = { iss: null, iat: null, exp: null, ver: null };
  content.iss = key;
  content.iat = now;
  content.exp = now + 24 * 60 * 60; // 1 day
  content.ver = 1;
  return content;
}

var header = {
  typ: "JWT",
  alg: "HS256"
};

// encode header
var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
var encodedHeader = base64url(stringifiedHeader);

// encode data
var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload()));
var encodedData = base64url(stringifiedData);

// build token
var token = encodedHeader + "." + encodedData;

// sign token
var signature = CryptoJS.HmacSHA256(token, secret);
signature = base64url(signature);
var signedToken = token + "." + signature;

export async function handler(event: any) {
  const data = JSON.parse(event.body);
  const { access_token, order_id } = data;

  try {
    await new TrueVaultClient({ accessToken: access_token });
    let pdf = await retrieveRequisitionPDFFromPWN(order_id, signedToken);
    return {
      statusCode: 200,
      body: JSON.stringify({
        pdf,
        status: "succeeded",
        connected: true,
        authenticated: true
      })
    };
  } catch (error) {
    console.log(
      `Error retrieving Sending Rtequisition PDF to client, order id: ${order_id}`,
      error
    );
    return {
      statusCode: 400,
      body: JSON.stringify({
        error,
        connected: true,
        authenticated: false,
        status: "failed"
      })
    };
  }
}

async function retrieveRequisitionPDFFromPWN(
  pwn_order_id: number,
  signedToken: string
) {
  try {
    const response = await axios({
      method: "get",
      url:
        ENVIROMENT === "production"
          ? `https://api.pwnhealth.com/v2/labs/orders/${pwn_order_id}/pdfs/requisition`
          : `https://api-staging.pwnhealth.com/v2/labs/orders/${pwn_order_id}/pdfs/requisition`,
      headers: { Authorization: `Bearer ${signedToken}` },
      responseType: "stream"
    });

    let buffer = await toArray(response.data).then(function(parts: any) {
      const buffers = parts.map((part: any) =>
        util.isBuffer(part) ? part : Buffer.from(part)
      );
      return Buffer.concat(buffers);
    });

    return buffer;
  } catch (error) {
    console.log(
      `Error retrieving Requisition PDF, order id: ${pwn_order_id}`,
      error
    );
    return error;
  }
}
