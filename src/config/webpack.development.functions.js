const webpack = require("webpack");

const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false }),
    new webpack.EnvironmentPlugin({
      APP_VERSON: 1.9,
      NODE_ENV: "development",
      DEPLOYMENT_ENV: "development",
      FAUNADB_SECRET: "fnADdqGNgkACCs_EVGB4cQOHbwz2zLMc1dgQ1nXh",
      GROUP_ID: "0d6ac20f-9db2-45b1-9051-01bf6f7cbf0b",
      REG_KEY: "d417aca8-08f9-4fea-8884-811369da697c",
      CALENDLY_CALLS_SCHEMA_ID: "2501ad7b-9d35-42be-95ec-e1405995131c",
      CALENDLY_CALLS_VAULT_ID: "e9d996a7-6a3a-428f-97f3-3559c5c69f8c",
      PWN_ORDERS_VAULT_ID: "9d0c4cd6-4a1f-4cd0-929c-181ac7947ac0",
      PWN_ORDERS_SCHEMA_ID: "f72d6f58-f248-4d81-96f4-f687fc511db4",
      STRIPE_PURCHASES_VAULT_ID: "8d293cb9-d70a-4d20-acf0-78db2bfb03c6",
      STRIPE_PURCHASES_SCHEMA_ID: "d1af41ab-13de-44e2-b4f4-18ca146c5452",
      STRIPE_ENDPOINT_SECRET: "whsec_nU0sqB3AMefSrSugqvwHJHk0oUKoNFvE",
      PWN_API_KEY: "bdc87ab40eb6310db805afdeb230e873",
      PWN_API_SECRET: "1c04ed5f7542cc74643437f207658739",
      TRUEVAULT_CALENDLY_KEY: "d1735b82-84d0-4faa-93c3-7a8d8474423d",
      TRUEVAULT_TWILIO_KEY: "2804e0c7-42e7-4f3c-ad6b-e53bae1c6f6a",
      TRUEVAULT_STRIPE_KEY: "e15ff1c1-e7b8-437a-a911-fd5bb33330a9",
      TRUEVAULT_PWN_KEY: "5f128b18-984c-4377-a66e-32d4899f4dd0",
      TRUEVAULT_FULL_ADMIN_KEY: "719786ea-b02a-495d-a398-c3c6cd6bea82",
      TRUEVAULT_PASSWORD_RESET_TOKEN:
        "sat-6a4b8731-23f9-4ebd-b10f-cb51b6fbc048:epEWYlj3iAlPVTbVOZE6wlTVfFXbp-m0mOF-jOaQeEo",
      TRUEVAULT_PASSWORD_RESET_FLOW_ID: "710ecc3e-ac2c-4b16-aa52-a1e4555cbb1b"
    })
  ]
};
