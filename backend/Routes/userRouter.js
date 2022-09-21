import express from 'express';
import multer from '../middlewares/multermiddleware.js'
import tokenAuthentication from "../middlewares/tokenmiddleware.js";
import userController from "../Controllers/userController.js";
const router = express.Router();

// import multerForm from 'multer'
// const upload = multer();

router
    .route('/')
    .get(userController.getAll)
    .post(multer,userController.RegisterUser)

router
    .route('/private')
    .get(tokenAuthentication,userController.privateRoute)

router
    .route('/:id')
    .get(userController.findOne)
    .patch(multer,userController.updateUser)

router
    .route('/login')
    .post(userController.loginUser)

router
    .route('/logout')
    .post(userController.logoutUser)


export default router