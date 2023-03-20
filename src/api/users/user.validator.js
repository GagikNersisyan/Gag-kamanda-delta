import { ValidatorError } from '../../utils/error-handling.js';

export const createUserValidator = (req, res, next) => {
  try {
    const { name, username } = req.body;
    if (!name) {
      throw new ValidatorError('Name is required', 403);
    }
    if (!username) {
      throw new ValidatorError('Username is required', 403);
    }
    next();
  } catch (err) {
    next(err);
  }
};
