import { ApolloServer, gql } from "apollo-server";

const tweet = [
  {
    id: "1",
    text: "first one!",
  },
  {
    id: "2",
    text: "second one!",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String
  }
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    ping: String!
  }
  type Mutation {
    postTweet(text: String!, userId: ID): Tweet
    deleteTweet(id: ID!): Boolean!
  }
`;

// GET /api/v1/tweets
// GET /api/v1/tweets:id
// POST DELETE PUT /api/v1/tweets:id

const resolvers = {
  Query: {
    allTweets() {
      return tweet;
    },
    tweet(root, { id }) {
      return tweet.find((tweet) => tweet.id === id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`서버 url ${url}`);
});
