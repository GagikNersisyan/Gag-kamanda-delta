import { Router } from 'express';
import {
  getUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController,
  createUserController,
} from './user.controller.js';
import { updateUserAsAdminValidator, createUserValidator } from './user.validator.js';
import { adminAuthorization } from '../../middlewares/admin-authorization.js';

const router = Router();

router.get('/', adminAuthorization, getUsersController);

router.get('/:id', adminAuthorization, getUserByIdController);

router.post('/', adminAuthorization, ...createUserValidator, createUserController);

router.put('/:id', adminAuthorization, ...updateUserAsAdminValidator, updateUserByIdController);

router.delete('/:id', adminAuthorization, deleteUserByIdController);

export default router;