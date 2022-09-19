import User from '../Models/userModel.js'
import fs from 'fs'

 async function getAll(req,res) {
    try {
        const user = await User.find()
        res.status(200).json({
            status: 'success',
            results: user.length,
            data: {
                user
            }
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

async function createUser(req,res) {
    try{
        const newUser = await User.create({
            ...req.body,
            image : {
                data : fs.readFileSync(req.file.path),
                contentType: 'image/png'
            }
        })
        res.status(201).json({
            status: 'Successfully Added in Database',
            data: {
                user: newUser
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

async function findOne(req, res) {
    try {
        const user = await User.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

async function updateUser(req, res) {
    try {
        console.log(req.body)
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}
export default {getAll, createUser, findOne, updateUser}