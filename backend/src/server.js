const { GraphQLServer } = require('graphql-yoga');

const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/schemas')

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start()