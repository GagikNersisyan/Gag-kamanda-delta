import { Router } from 'express';
import {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
} from './products.controller.js';
import { createProductValidator } from './products.validator.js';

const router = Router();

router.get('/', getProductsController);

router.get('/:index',getProductController);

router.post('/', createProductValidator, createProductController);
router.put('/:index', updateProductController);

router.delete('/:index', deleteProductController);

export default router;