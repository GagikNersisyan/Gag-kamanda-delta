import { Router } from 'express';
import {
  getPcsController,
  getPcByIdController,
  createPcController,
  updatePcByIdController,
  deletePcByIdController,
} from './pc.controller.js';
import { createPcValidator, updatePcValidator } from './pc.validator.js';

const router = Router();

router.get('/', getPcsController);

router.get('/:id', getPcByIdController);

router.post('/', ...createPcValidator, createPcController);

router.put('/:id', ...updatePcValidator, updatePcByIdController);

router.delete('/:id', deletePcByIdController);

export default router;