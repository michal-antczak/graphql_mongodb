import mongoose from 'mongoose'

export const db = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to Database')
    }catch(e){
        console.log("Error connecting to Database")
        console.error(e)
        process.exit(1)
    }
}