import { Router } from 'express';
import {
  getHddsController,
  getHddByIdController,
  createHddController,
  updateHddByIdController,
  deleteHddByIdController,
} from './hdd.controller.js';
import { createHddValidator, updateHddValidator } from './hdd.validator.js';
import { adminAuthorization } from '../../middlewares/authorization.js';

const router = Router();

router.get('/', adminAuthorization, getHddsController);

router.get('/:id', getHddByIdController);

router.post('/', adminAuthorization, ...createHddValidator, createHddController);

router.put('/:id', adminAuthorization, ...updateHddValidator, updateHddByIdController);

router.delete('/:id', adminAuthorization, deleteHddByIdController);

export default router;