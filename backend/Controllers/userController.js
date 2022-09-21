import User from '../Models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import jwt_decode from "jwt-decode";

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

async function RegisterUser(req,res) {
    try{
        const password = req.body.password
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
            ...req.body,
            image: req.file.path,
            password: hash
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

async function loginUser(req,res) {
   try {
       const pass = req.body.password
       const emailfrombody = req.body.email
       const user = await User.findOne({email: emailfrombody})
       console.log(user)
       console.log(user._id)
       console.log(user.RoleId)
       const hash = user.password
       const verify = bcrypt.compareSync(pass, hash);
       const token = jwt.sign({ userId: user._id, roleId: user.roleId }, "YOUR_SECRET_KEY");

       if (verify) {
           return res
               .cookie("access_token", token, {
                   httpOnly: true,
               })
               .status(200)
               .json({ message: "Logged in successfully "})

       }
   } catch (err) {
       res.status(404).json({
           status: 'fail',
           message: err
       })
   }
}

async function privateRoute(req,res) {
    const token = req.cookies.access_token;
    console.log(token)

    const decoded = jwt_decode(token);
    console.log(decoded)

    res.status(200).json({
            message:'Hello this route is protected'
        })
}

async function logoutUser(req,res) {
    return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out"})
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
        const password = req.body.password
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        const user = await User.findByIdAndUpdate(req.params.id, {...req.body,
        image: req.file.path,
        password: hash
        }, {
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
export default {getAll, RegisterUser, findOne, updateUser, loginUser, privateRoute, logoutUser}