import { Router } from 'express';

import {
  getBagsController,
  getBagByIdController,
  createBagController,
  deleteBagByIdController,
  updateBagByIdController,
} from './bag.controller.js';

import { createBagValidator, updateBagValidator } from './bag.validator.js';
import { clientAuthorization } from '../../middlewares/client-authorization.js';

const router = Router();

router.get('/', clientAuthorization, getBagsController);

router.get('/:id', clientAuthorization, getBagByIdController);

router.post('/', clientAuthorization, ...createBagValidator, createBagController);

router.put('/:id', clientAuthorization, ...updateBagValidator,updateBagByIdController);

router.delete('/:id', clientAuthorization, deleteBagByIdController);

export default router;