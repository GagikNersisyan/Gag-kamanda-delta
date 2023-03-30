import { Router } from 'express';
import {
  getUsersController,
  getUserController,
  createUserController,
  updateUserController,
  deleteUserController,
} from './user.controller.js';
import { createUserValidator, updateUserValidator } from './user.validator.js';

const router = Router();

router.get('/', getUsersController);

router.get('/:id', getUserController);

router.post('/', ...createUserValidator, createUserController);

router.put('/:id', ...updateUserValidator, updateUserController);

router.delete('/:id', deleteUserController);

export default router;