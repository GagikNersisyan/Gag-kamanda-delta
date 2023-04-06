import { Router } from 'express';
import {
  getMousesController,
  getMouseByIdController,
  createMouseController,
  updateMouseByIdController,
  deleteMouseByIdController,
} from './mouse.controller.js';
import { createMouseValidator, updateMouseValidator } from './mouse.validator.js';

const router = Router();

router.get('/', getMousesController);

router.get('/:id', getMouseByIdController);

router.post('/', ...createMouseValidator, createMouseController);

router.put('/:id', ...updateMouseValidator, updateMouseByIdController);

router.delete('/:id', deleteMouseByIdController);

export default router;