import { Router } from 'express';
import {
  getRamsController,
  getRamByIdController,
  createRamController,
  updateRamByIdController,
  deleteRamByIdController,
} from './ram.controller.js';
import { createRamValidator, updateRamValidator } from './ram.validator.js';
import { adminAuthorization } from '../../middlewares/admin-authorization.js';

const router = Router();

router.get('/', adminAuthorization, getRamsController);

router.get('/:id', adminAuthorization, getRamByIdController);

router.post('/', adminAuthorization, ...createRamValidator, createRamController);

router.put('/:id', adminAuthorization, ...updateRamValidator, updateRamByIdController);

router.delete('/:id', adminAuthorization, deleteRamByIdController);

export default router;