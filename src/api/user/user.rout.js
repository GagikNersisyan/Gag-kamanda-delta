import { Router } from 'express';
import {
  getUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController,
} from './user.controller.js';
import { updateUserValidator } from './user.validator.js';

const router = Router();

router.get('/', getUsersController);

router.get('/:id', getUserByIdController);

router.put('/:id', ...updateUserValidator, updateUserByIdController);

router.delete('/:id', deleteUserByIdController);

export default router;