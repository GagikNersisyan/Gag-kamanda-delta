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

router.get('/:index', getUserController);

router.post('/', ...createUserValidator, createUserController);

router.put('/:index', ...updateUserValidator, updateUserController);

router.delete('/:index', deleteUserController);

export default router;