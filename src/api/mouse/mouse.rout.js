
import { Router } from 'express';

import {
  getMousesController,
  getMouseByIdController,
  createMouseController,
  deleteMouseIdController,
  updateMouseIdController,
} from './mouse.controller.js';

import { createMouseValidator, updateMouseValidator } from './mouse.validator.js';
import { adminAuthorization } from '../../middlewares/admin-authorization.js';

const router = Router();

router.get('/', adminAuthorization, getMousesController);

router.get('/:id', adminAuthorization, getMouseByIdController);

router.post('/', adminAuthorization, ...createMouseValidator, createMouseController);

router.put('/:id', adminAuthorization, ...updateMouseValidator, updateMouseIdController);

router.delete('/:id', adminAuthorization, deleteMouseIdController);

export default router;