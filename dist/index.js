'use strict';

require('@babel/polyfill');

var _require = require('graphql-yoga'),
    GraphQLServer = _require.GraphQLServer;

var _require2 = require('prisma-binding'),
    Prisma = _require2.Prisma;

var resolvers = require('./resolvers');
require('dotenv').config();

var server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: resolvers,
  context: function context(req) {
    return {
      req: req,
      prisma: new Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        endpoint: process.env.ENDPOINT
      })
    };
  },
  introspection: true
});

var port = process.env.PORT || 4000;
server.start(port, function () {
  return console.log('server running');
});
/*server.start(
    () => console.log(`GraphQL server is running on http://localhost:4000`)
)*/