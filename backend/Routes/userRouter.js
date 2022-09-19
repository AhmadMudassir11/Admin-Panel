import express from 'express';
import multer from '../multer/multermiddleware.js'
import userController from "../Controllers/userController.js";
const router = express.Router();

router
    .route('/user')
    .get(userController.getAll)
    .post(multer,userController.createUser)

router
    .route('/user/:id')
    .get(userController.findOne)
    .patch(userController.updateUser)

export default router