require('@babel/polyfill');
const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');
const resolvers = require('./resolvers');
require('dotenv').config()

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint:
        process.env.ENDPOINT,
    }),
  }),
  introspection:true
})

server.start({ port: process.env.PORT || 4000 }, () => {
  console.log('The server is up!')
})
/*const port = process.env.PORT || 4000
server.start(port, () => console.log('server running'))
server.start(
    () => console.log(`GraphQL server is running on http://localhost:4000`)
)*/