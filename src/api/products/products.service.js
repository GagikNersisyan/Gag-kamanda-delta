import { ServiceError } from '../../utils/error-handling.js';
import { deleteProductController } from './products.controller.js';
import { Products } from './products.entity.js';

export const getProductsService = async () => {
  const got = await Products.find();
  return got;
};

export const getProductService = async (id) => {
  const got = await Products.findOne({ _id: id });
  return got;
};

export const createProductService = async (product) => {
  const got = await Products.findOne({ productsname: product.productsname });
  if (got != null) {
    throw new ServiceError('Productsname Exists', 403);
  }
  const created = await Products.create(product);
  return created;
};

export const updateProductService = async (id, product) => {
  const updated = await Products.updateOne({ _id: id }, product);
  return updated;
};

export const deleteProductService = async (id) => {
  const deleted = await Products.deleteOne({ _id: id });
  return deleted;
};