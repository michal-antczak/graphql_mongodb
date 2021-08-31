import { ApolloServer, gql } from 'apollo-server-micro'
import {NextApiRequest, NextApiResponse} from 'next'

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!'
    },
  },
}

export const config = {
  api: {
    bodyParser: false,
  },
}
const apolloServer = new ApolloServer({ typeDefs, resolvers })
await apolloServer.start()

export default apolloServer.createHandler({ path: '/api/graphql' }) //server.start().then(() => server.createHandler());



// export default async function handler(req: NextApiRequest, res: NextApiResponse){
  
//   const apolloServer = new ApolloServer({ typeDefs, resolvers })
//   await apolloServer.start()
//   apolloServer.createHandler({ path: '/api/graphql' })

//   // res.status(200).json({hello: "world"})
// }