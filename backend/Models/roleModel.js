import mongoose, {mongo, Schema} from "mongoose";

const roleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, 'Please enter your picture']
    },
    isActive: {
        type: Number,
        default: 1,
    },
    permissionIds: {
        type: [Schema.Types.ObjectId],
        ref: 'Permissions',
        default: [mongoose.Types.ObjectId('632b0e7b6e10bfd48a928550')]}
})
const Role = mongoose.model('roles', roleSchema)
export default Role;