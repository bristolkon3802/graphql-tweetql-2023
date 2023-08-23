import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    text: String
    hello: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`서버 url ${url}`);
});
