import { ValidatorError } from '../../utils/error-handling.js';

export const createProductValidator = (req, res, next) => {
  try {
    const { product, productsname } = req.body;
    if (!product) {
      throw new ValidatorError('product is required', 403);
    }
    if (!productsname) {
      throw new ValidatorError('productsname is required', 403);
    }
    if(productsname.length<5){
        throw new ValidatorError('productsname is very short', 403);
    }
    next();
  } catch (err) {
    next(err);
  }
};