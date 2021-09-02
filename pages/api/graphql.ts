import connectDb  from '../../database'
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../database/typeDefs';
import { resolvers } from '../../database/resolvers';
import { PageConfig } from 'next';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse } from 'http';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const schema = {
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
}

const apolloServer = new ApolloServer(schema);

const startServer = apolloServer.start();

async function handler(req: MicroRequest, res: ServerResponse) {

  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req,res);
}

export default connectDb(handler)