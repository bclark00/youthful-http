import ApolloClient from "apollo-boost";
import { headers } from "./config";

const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  headers
});

export { client };
