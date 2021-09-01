import { ApolloServer, gql } from 'apollo-server-micro'
import { db } from '../../database'
import User from '../../models/User'

db()

const typeDefs = gql`

  type User {
    id: ID!
    name: String
    gender: String
  }
  type Query {
    sayHello: String
    getUsers: [User]
    getUser(id: ID!): User
  }
`

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!'
    },
    getUsers: async() => { 
      const users = await User.find({})
      if(!users){
        throw new Error("No users found")
      }
      return users
    }
  },
}

export const config = {
  api: {
    bodyParser: false,
  },
}
const apolloServer = new ApolloServer({ typeDefs, resolvers })
await apolloServer.start()

export default apolloServer.createHandler({ path: '/api/graphql' }) 