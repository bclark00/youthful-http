// src/lambda/graphql.js
import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Todo {
    title: String!
    completed: Boolean
  }

  type Query {
    allTodos: [Todo!]
    todosByCompletedFlag(completed: Boolean!): [Todo!]
  }
`;

const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
