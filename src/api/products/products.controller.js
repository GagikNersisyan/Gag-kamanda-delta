import {
  createProductService, deleteProductService, getProductService, getProductsService, updateProductService,
} from './products.service.js';

export const getProductsController = async (req, res) => {
  const products = await getProductsService();
  res.send(products);
};

export const getProductController = async (req, res) => {
  const product = await getProductService(req.params.id);
  res.send(product);
};

export const createProductController = async (req, res, next) => {
  try {
    const product = await createProductService(req.body);
    return res.send(product);
  } catch (err) {
    next(err);
  }
};

export const updateProductController = async (req, res, next) => {
  try {
    const product = await updateProductService(req.params.id, req.body);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

export const deleteProductController = async (req, res) => {
  const product = await deleteProductService(req.params.id);
  res.send(product);
}