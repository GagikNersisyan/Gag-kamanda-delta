import { Router } from 'express';
import {
  getCasesController,
  getCaseByIdController,
  createCaseController,
  updateCaseByIdController,
  deleteCaseByIdController,
} from '.case.controller.js';
import { createCaseValidator, updateCaseValidator } from './case.validator.js';

const router = Router();

router.get('/', getCasesController);

router.get('/:id', getCaseByIdController);

router.post('/', ...createCaseValidator, createCaseController);

router.put('/:id', ...updateCaseValidator, updateCaseByIdController);

router.delete('/:id', deleteCaseByIdController);

export default router;