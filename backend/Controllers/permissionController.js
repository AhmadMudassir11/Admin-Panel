import Permissions from "../Models/permissionModel.js";

async function allPermissions(req,res) {
    try {
        const permissions = await Permissions.find()
        res.status(200).json({
            status: 'success',
            data: {
                permissions
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }

}

async function createPermission(req,res) {
    try {
        const newPermission = await Permissions.create(req.body)
        res.status(201).json({
            status: 'Role successfully added in Database',
            data: {
                role: newPermission
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }

}
async function updatePermission(req,res) {
    try {
        // console.log(req.params.id)
        const updatePermission = await Permissions.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            })
        res.status(201).json({
            status: 'Role successfully Updated in Database',
            data: {
                role: updatePermission
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }

}
async function deletePermission(req,res) {
 try {
     const deletePermission = await Permissions.findByIdAndDelete(req.params.id)
     res.status(201).json({
         status: 'Success',
         message: 'Permission Deleted from Database'
     })
 } catch (err) {
     res.status(404).json({
         status: 'fail',
         message: err
     })
 }
}
export default {allPermissions, createPermission, updatePermission, deletePermission}