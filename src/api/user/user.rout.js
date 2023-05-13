import { Router } from 'express';
import {
  getUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController,
  createUserController,
} from './user.controller.js';
import { updateUserAsAdminValidator, createUserValidator,changePasswordValidator } from './user.validator.js';
import { adminAuthorization } from '../../middlewares/admin-authorization.js';
import { clientAuthorization } from '../../middlewares/client-authorization.js';

const router = Router();

router.get('/', adminAuthorization, getUsersController);

router.get('/:id', adminAuthorization, getUserByIdController);

router.post('/', adminAuthorization, ...createUserValidator, createUserController);

router.put('/:id', adminAuthorization, ...updateUserAsAdminValidator, updateUserByIdController);

router.delete('/:id', adminAuthorization, deleteUserByIdController);

router.put('/:id', clientAuthorization, ...changePasswordValidator, updateUserByIdController);

export default router;