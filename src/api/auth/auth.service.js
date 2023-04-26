import { ServiceError } from '../../utils/error-handling.js';
import { createUserService, getUserByEmailService, updateUserByIdService } from '../user/user.service.js';
import { sendEmail } from '../../services/node-mailer.js';
import { comparePassword } from '../../services/bcrypt.js';
import { signToken, verifyToken } from '../../services/jwt.js';

export const signupService = async (body) => {
  const user = await createUserService(body);
  try {
    const token = signToken({ id: user.id }, '1d');
    await sendEmail(body.email, 'SignUp verification', `Please verify your account ${token}`);
  } catch (err) {
    console.log(err.message);
    throw new ServiceError(err.message, 403);
  }
};

export const signinService = async (body) => {
  const user = await getUserByEmailService(body.email);
  if (user == null) {
    throw new ServiceError('unauthorized', 401);
  }
  if (!user.isVerified) {
    // const token = signToken({ id: user.id }, '1d');
    // await sendEmail(body.email, 'SignUp verification', `Please verify your account ${token}`);
    throw new ServiceError('email is not verified', 401);
  }

  if (!(await comparePassword(body.password, user.password))) {
    throw new ServiceError('unauthorized', 401);
  }
  return { token: signToken({ id: user.id }, '30d') };
};

export const verifyEmailService = async (body) => {
  try {
    const decoded = verifyToken(body.token);
    await updateUserByIdService(decoded.id, { isVerified: true });
  } catch (err) {
    throw new ServiceError('Token not valid', 403);
  }
};

export const newVerificationService = async (body) => {
  try {
    const user = await getUserByEmailService(body.email);
    if (user == null) {
      throw new ServiceError('Not found', 403);
    }
    const token = signToken({ id: user.id }, '1d');
    await sendEmail(body.email, 'SignUp verification', `Please verify your account ${token}`);
  } catch (err) {
    throw new ServiceError('Token not valid', 403);
  }
};