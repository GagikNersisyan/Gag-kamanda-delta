
import { ServiceError } from '../../utils/error-handling.js';
import { createUserService, getUserByEmailOrFailService, updateUserByIdService } from '../user/user.service.js';
import { sendEmail } from '../../services/node-mailer.js';
import { comparePassword } from '../../services/bcrypt.js';
import { signToken, verifyToken } from '../../services/jwt.js';

export const signupService = async (body) => {
  const user = await createUserService({ ...body, role: 'CLIENT' });
  try {
    const token = signToken({ id: user.id }, '1d');
    await sendEmail(body.email, 'SignUp verification', `Please verify your account ${token}`);
  } catch (err) {
    console.log(err.message);
    throw new ServiceError(err.message, 403);
  }
};

export const signinService = async (body) => {
  let user;
  try {
    user = await getUserByEmailOrFailService(body.email);
    console.log('__user__', user);
  } catch (err) {
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
  console.log('user.id', user.id);
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
    const user = await getUserByEmailOrFailService(body.email);
    const token = signToken({ id: user.id }, '1d');
    await sendEmail(body.email, 'SignUp verification', `Please verify your account ${token}`);
  } catch (err) {
    throw new ServiceError('Token not valid', 403);
  }
};

// export const recoverPasswordService = async (body) => {
//   const verifiedEmail = await getUserByEmailService(body.email);
//   if (verifiedEmail == null) {
//     throw new ServiceError('unauthorized', 401);
//   }
//   const user = await createUserService(body);
//   try {
//     const token = signToken({ id: user.id }, '1d');
//     await sendEmail(body.email, 'SignUp verification', `Please verify your account ${token}`);
//   } catch (err) {
//     console.log(err.message);
//     throw new ServiceError(err.message, 403);
//   }
//   try {
//     const decoded = verifyToken(body.token);
//     await updateUserByIdService(decoded.id, { isVerified: true });
//   } catch (err) {
//     throw new ServiceError('Token not valid', 403);
//   }
// };

// export const changePasswordService = async (body) => {

// }