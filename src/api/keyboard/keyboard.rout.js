
import { Router } from 'express';
import {
  getKeyboardsController,
  getKeyboardByIdController,
  createKeyboardController,
  updateKeyboardByIdController,
  deleteKeyboardByIdController,
} from './keyboard.controller.js';
import { createKeyboardValidator, updateKeyboardValidator } from './keyboard.validator.js';
import { adminAuthorization } from '../../middlewares/authorization.js';

const router = Router();

router.get('/', adminAuthorization, getKeyboardsController);

router.get('/:id', adminAuthorization, getKeyboardByIdController);

router.post('/', adminAuthorization, ...createKeyboardValidator, createKeyboardController);

router.put('/:id', adminAuthorization, ...updateKeyboardValidator, updateKeyboardByIdController);

router.delete('/:id', adminAuthorization, deleteKeyboardByIdController);

export default router;
