import { Router } from 'express';
import {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserByIdController,
  deleteUserByIdController,
} from './user.controller.js';
import { createUserValidator, updateUserValidator } from './user.validator.js';

const router = Router();

router.get('/', getUsersController);

router.get('/:id', getUserByIdController);

router.post('/', ...createUserValidator, createUserController);

router.put('/:id', ...updateUserValidator, updateUserByIdController);

router.delete('/:id', deleteUserByIdController);

export default router;