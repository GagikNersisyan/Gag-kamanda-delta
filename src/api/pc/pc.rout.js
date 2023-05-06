import { Router } from 'express';

import {
  getPcsController,
  getPcByIdController,
  createPcController,
  deletePcByIdController,
  updatePcByIdController,
} from './pc.controller.js';

import { createPcValidator, updatePcValidator } from './pc.validator.js';
import { adminAuthorization } from '../../middlewares/admin-authorization.js';

const router = Router();

router.get('/', adminAuthorization, getPcsController);

router.get('/:id', adminAuthorization, getPcByIdController);

router.post('/', adminAuthorization, ...createPcValidator, createPcController);

router.put('/:id', adminAuthorization, ...updatePcValidator,updatePcByIdController);

router.delete('/:id', adminAuthorization, deletePcByIdController);

export default router;