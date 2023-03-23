import fs from 'fs/promises';
import { ServiceError } from '../../utils/error-handling.js';

const PATH = 'src/api/products/products.json';

export const getProductsService = async () => {
  const products = JSON.parse(await fs.readFile(PATH));
  return products;
};

export const getProductService = async (index) => {
  const products = await getProductsService();
  if (products[index] == null) {
    return { massage: 'product is not exists' };
  }
  return products[index];
};

export const createProductService = async (product) => {
  const products = await getProductsService();
  const found = products.find((u) => u.productsname === product.productsname);
  if (found != null) {
    throw new ServiceError('Productsname Exists', 409);
  }
  products.push(product);
  await fs.writeFile(PATH, JSON.stringify(products));
  return products;
};

export const updateProductService = async (index, product) => {
  const products = await getProductsService();

  if (products[index] == null) {
    return { massage: 'product is not exists' };
  }

  if (product.productsname != null) {
    const found = products.find((u) => u.productsname === product.productsname);
    if (found != null) {
      return { massage: 'Productsname Exists' };
    }
  }
  products[index] = { ...products[index], ...product };

  await fs.writeFile(PATH, JSON.stringify(products));
  return products;
};

export const deleteProductService = async (index) => {
  const products = await getProductsService();
  const filtered = products.filter((product, i) => i !== index);
  await fs.writeFile(PATH, JSON.stringify(filtered));
  return filtered;
};