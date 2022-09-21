import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
    permission: {
        type: String,
        required: [true, 'Please enter your picture'],
        unique: true
    },
    isActive: {
        type: Number,
        default: 1,
    }
})
const Permissions = mongoose.model('permissions', permissionSchema)
export default Permissions;