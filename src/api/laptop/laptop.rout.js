
import { Router } from 'express';
import {
  getLaptopsController,
  getLaptopByIdController,
  createLaptopController,
  updateLaptopByIdController,
  deleteLaptopByIdController,
} from './laptop.controller.js';
import { createLaptopValidator, updateLaptopValidator } from './laptop.validator.js';
import { adminAuthorization } from '../../middlewares/admin-authorization.js';

const router = Router();

router.get('/', adminAuthorization, getLaptopsController);

router.get('/:id', adminAuthorization, getLaptopByIdController);

router.post('/', adminAuthorization, ...createLaptopValidator, createLaptopController);

router.put('/:id', adminAuthorization, ...updateLaptopValidator, updateLaptopByIdController);

router.delete('/:id', adminAuthorization, deleteLaptopByIdController);

export default router;