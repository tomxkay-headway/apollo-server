const { ApolloServer } = require("apollo-server");
const models = require("./models");
const resolvers = require("./apollo/resolvers");
const typeDefs = require("./apollo/schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
