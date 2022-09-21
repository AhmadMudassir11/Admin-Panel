import express from 'express';
import permissionController from "../Controllers/permissionController.js";

const router = express.Router();

router
    .route('/')
    .get(permissionController.allPermissions)
    .post(permissionController.createPermission)

router
    .route('/:id')
    .patch(permissionController.updatePermission)
    .delete(permissionController.deletePermission)

export default router