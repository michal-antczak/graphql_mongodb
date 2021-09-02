import { gql } from "apollo-server-core"

export const typeDefs = gql`

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