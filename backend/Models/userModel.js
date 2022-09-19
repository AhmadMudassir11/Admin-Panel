import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true, 'Name cannot be empty'],
        unique: true
    },
    lastname: {
        type: String,
        required: [true, 'lastname cannot be empty']
    },
    password: {
        type: String,
        required: [true, ' You must choose a password']
    },
    email: {
        type: String,
        default: false,
        required: [true, 'Email cannot be empty']
    },
    image: {
        data: Buffer,
        contentType: String
    },

})
const User = mongoose.model('Users', userSchema)
export default User;