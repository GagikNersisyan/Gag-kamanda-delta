import { Router } from 'express';
import {
  getUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController,
  createAdminController
} from './user.controller.js';
import { updateUserValidator,createUserValidator } from './user.validator.js';
import { adminAuthorization } from '../../middlewares/authorization.js';

const router = Router();

router.get('/',adminAuthorization, getUsersController);

router.get('/:id',adminAuthorization, getUserByIdController);

router.post('/',adminAuthorization, ...createUserValidator,createAdminController)

router.put('/:id',adminAuthorization, ...updateUserValidator, updateUserByIdController);

router.delete('/:id',adminAuthorization, deleteUserByIdController);

export default router;