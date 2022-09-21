import mongoose, {Schema} from "mongoose";

let validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

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
        validate:[validateEmail,'Please fill valid email!!'],
        lowercase:true,
        unique:'email already exists',
        required: [true, 'Email cannot be empty']
    },
    image: {
        type: String,
        required: [true, 'Please enter your picture']
    },
    isActive: {
        type: Number,
        default: 1,
    },
    roleId: {
        type: Schema.Types.ObjectId, ref: 'Role',
        default: [mongoose.Types.ObjectId('632b1299ff45667c14615b2d')]
    }

})
const User = mongoose.model('Users', userSchema)
export default User;