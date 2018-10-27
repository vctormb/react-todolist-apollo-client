const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { prisma } = require('./prisma/generated/prisma');

const typeDefs = importSchema('./schema.graphql');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    request: req,
    prisma,
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
