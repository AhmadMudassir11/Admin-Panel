import express from 'express';
import roleController from "../Controllers/roleController.js";


const router = express.Router();

router
    .route('/')
    .get(roleController.allRoles)
    .post(roleController.createRole)

router
    .route('/:id')
    .patch(roleController.updateRole)
    .delete(roleController.deleteRole)

export default router