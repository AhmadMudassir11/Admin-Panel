import Role from "../Models/roleModel.js";
import Permissions from "../Models/permissionModel.js";

async function allRoles(req,res) {
    try {
        const roles = await Role.find()
        res.status(200).json({
            status: 'success',
            data: {
                roles
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

async function createRole(req,res) {
    try {
        // const permission = await Permissions.find()
        const newRole = await Role.create(req.body)
        res.status(201).json({
            status: 'Role successfully added in Database',
            data: {
                role: newRole
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

async function updateRole(req,res) {
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
async function deleteRole(req,res) {
    try {
        const deleteRole = await Role.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status: 'Success',
            message: 'Role Deleted from Database'
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

export default {allRoles, createRole, updateRole, deleteRole}