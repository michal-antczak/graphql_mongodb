import User from '../models/User'

export const resolvers = {
    Query: {
      getUsers: async() => { 
        const users = await User.find({})
        if(!users){
          throw new Error("No users found")
        }
        console.log(users)
        return users
      }
    },
  }