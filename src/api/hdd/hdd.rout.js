import { Router } from 'express';
import {
  getHddsController,
  getHddByIdController,
  createHddController,
  updateHddByIdController,
  deleteHddByIdController,
} from './hdd.controller.js';
import { createHddValidator, updateHddValidator } from './hdd.validator.js';

const router = Router();

router.get('/', getHddsController);

router.get('/:id', getHddByIdController);

router.post('/', ...createHddValidator, createHddController);

router.put('/:id', ...updateHddValidator, updateHddByIdController);

router.delete('/:id', deleteHddByIdController);

export default router;