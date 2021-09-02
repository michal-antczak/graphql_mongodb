import mongoose from 'mongoose'

const connectDb = handler => async(req, res) =>{
    try{
        if (mongoose.connections[0].readyState) {
            // Use current db connection
            return handler(req, res);
          }
        
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to Database')
        return handler(req, res);
    }catch(e){
        console.log("Error connecting to Database")
        console.error(e)
        process.exit(1)
    }
}

export default connectDb