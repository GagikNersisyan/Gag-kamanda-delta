import { verifyToken } from '../services/jwt.js';
import { ValidatorError } from '../utils/error-handling.js';
import { getUserByIdService } from '../api/user/user.service.js';

export const authorization = async (req, res, next) => {
  try {
    console.log('token___', req.header('authorization'));

    const token = req.header('authorization').replace('Bearer ', '');
    const decoded = verifyToken(token);

    const user = await getUserByIdService(decoded.id);
    if (!user) throw new Error();

    req.user = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,
    };

    next();
  } catch (error) {
    next(new ValidatorError('unauthorized', 401));
  }
};