import { Router } from 'express';
import {
  getRamsController,
  getRamByIdController,
  createRamController,
  updateRamByIdController,
  deleteRamByIdController,
} from './ram.controller.js';
import { createRamValidator, updateRamValidator } from './ram.validator.js';

const router = Router();

router.get('/', getRamsController);

router.get('/:id', getRamByIdController);

router.post('/', ...createRamValidator, createRamController);

router.put('/:id', ...updateRamValidator, updateRamByIdController);

router.delete('/:id', deleteRamByIdController);

export default router;