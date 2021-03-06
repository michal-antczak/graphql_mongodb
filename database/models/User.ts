import mongoose from 'mongoose'

const {Schema} = mongoose

const UserSchema = new Schema({
    name: String,
    gender: String
})

export default mongoose.models.User || mongoose.model("User", UserSchema)