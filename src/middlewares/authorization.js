import { verifyToken } from '../services/jwt.js';
import { ValidatorError } from '../utils/error-handling.js';
import { getUserByIdService } from '../api/user/user.service.js';

export const adminAuthorization = async (req, res, next) => {
  try {
    const token = req.header('authorization').replace('Bearer ', '');
    const decoded = verifyToken(token);

    const user = await getUserByIdService(decoded.id);

    if (!user || user.role === 'CLIENT') throw new Error();

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
    console.log('___error___', error);
    next(new ValidatorError('unauthorized', 401));
  }
};