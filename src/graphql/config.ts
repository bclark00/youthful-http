const b64encodedSecret = Buffer.from(
  process.env.FAUNADB_SERVER_SECRET + ":"
).toString("base64");
const headers = { Authorization: `Basic ${b64encodedSecret}` };

export { headers };
