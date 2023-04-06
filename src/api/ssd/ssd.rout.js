import { Router } from 'express';
import {
  getSsdsController,
  getSsdByIdController,
  createSsdController,
  updateSsdByIdController,
  deleteSsdByIdController,
} from './ssd.controller.js';
import { createSsdValidator, updateSsdValidator } from './ssd.validator.js';

const router = Router();

router.get('/', getSsdsController);

router.get('/:id', getSsdByIdController);

router.post('/', ...createSsdValidator, createSsdController);

router.put('/:id', ...updateSsdValidator, updateSsdByIdController);

router.delete('/:id', deleteSsdByIdController);

export default router;