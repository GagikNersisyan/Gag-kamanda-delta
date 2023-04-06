import { Router } from 'express';
import {
  getLaptopsController,
  getLaptopByIdController,
  createLaptopController,
  updateLaptopByIdController,
  deleteLaptopByIdController,
} from './laptop.controller.js';
import { createLaptopValidator, updateLaptopValidator } from './laptop.validator.js';

const router = Router();

router.get('/', getLaptopsController);

router.get('/:id', getLaptopByIdController);

router.post('/', ...createLaptopValidator, createLaptopController);

router.put('/:id', ...updateLaptopValidator, updateLaptopByIdController);

router.delete('/:id', deleteLaptopByIdController);

export default router;