
import { Router } from 'express';
import {
  getSsdsController,
  getSsdByIdController,
  createSsdController,
  updateSsdByIdController,
  deleteSsdByIdController,
} from './ssd.controller.js';
import { createSsdValidator, updateSsdValidator } from './ssd.validator.js';
import { adminAuthorization } from '../../middlewares/authorization.js';

const router = Router();

router.get('/', adminAuthorization, getSsdsController);

router.get('/:id', adminAuthorization, getSsdByIdController);

router.post('/', adminAuthorization, ...createSsdValidator, createSsdController);

router.put('/:id', adminAuthorization, ...updateSsdValidator, updateSsdByIdController);

router.delete('/:id', adminAuthorization, deleteSsdByIdController);

export default router;