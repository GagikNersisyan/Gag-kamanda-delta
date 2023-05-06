
import { Router } from 'express';
import {
  getCasesController,
  getCaseByIdController,
  createCaseController,
  updateCaseByIdController,
  deleteCaseByIdController,
} from './case.controller.js';
import { createCaseValidator, updateCaseValidator } from './case.validator.js';
import { adminAuthorization } from '../../middlewares/admin-authorization.js';

const router = Router();

router.get('/', adminAuthorization, getCasesController);

router.get('/:id', adminAuthorization, getCaseByIdController);

router.post('/', adminAuthorization, ...createCaseValidator, createCaseController);

router.put('/:id', adminAuthorization, ...updateCaseValidator, updateCaseByIdController);

router.delete('/:id', adminAuthorization, deleteCaseByIdController);

export default router;
