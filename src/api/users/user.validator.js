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
    if (name.length < 5) {
      throw new ValidatorError('Name is very short', 403);
    }
    if (name[0] > a && name[0] < z) {
      throw new ValidatorError('Name is must be start capital letter', 403);
    }

    next();
  } catch (err) {
    next(err);
  }
};
export const UpdateUserValidator = (req, res, next) => {
  try {
    const { name, username } = req.body;
    if (name[index] === null) {
      console.log("Name is not defined", 404);
    }
    next();
  }
catch (err) {
  next(err);
}
}
