import {
    createProductService, deleteProductService, getProductService, getProductsService, updateProductService,
  } from './products.service.js';
  
  export const getProductsController = async (req, res) => {
    const products = await getProductsService();
    res.send(products);
  };
  
  export const getProductController = async (req, res) => {
    const index = Number(req.params.index);
    const product = await getProductService(index);
    res.send(product);
  };
  
  export const createProductController = async (req, res, next) => {
    try {
      const product = await createProductService(req.body);
      res.send(product);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateProductController = async (req, res) => {
    const index = Number(req.params.index);
    const product = await updateProductService(index, req.body);
    res.send(product);
  };
  
  export const deleteProductController = async (req, res) => {
    const index = Number(req.params.index);
    const product = await deleteProductService(index);
    res.send(product);
  };