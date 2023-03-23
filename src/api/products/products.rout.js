import { Router } from 'express';
import {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
} from './user.controller.js';
import { createProductValidator } from './product.validator.js';

const router = Router();

router.get('/', getProductsController);

router.get('/:index',getProductController);

router.post('/', createProductValidator, createProductController);
router.put('/:index', updateProductController);

router.delete('/:index', deleteProductController);

export default router;