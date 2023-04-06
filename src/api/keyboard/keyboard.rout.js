import { Router } from 'express';
import {
  getKeyboardsController,
  getKeyboardByIdController,
  createKeyboardController,
  updateKeyboardByIdController,
  deleteKeyboardByIdController,
} from './keyboard.controller.js';
import { createKeyboardValidator, updateKeyboardValidator } from './keyboard.validator.js';

const router = Router();

router.get('/', getKeyboardsController);

router.get('/:id', getKeyboardByIdController);

router.post('/', ...createKeyboardValidator, createKeyboardController);

router.put('/:id', ...updateKeyboardValidator, updateKeyboardByIdController);

router.delete('/:id', deleteKeyboardByIdController);

export default router;