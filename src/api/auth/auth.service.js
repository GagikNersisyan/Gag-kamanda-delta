import { ServiceError } from '../../utils/error-handling.js';
import { createUserService, getUserByUsernameService } from '../user/user.service.js';
import { sendEmail } from '../../services/node-mailer.js';
import { comparePassword } from '../../services/bcrypt.js';
import { signToken } from '../../services/jwt.js';

export const signupService = async (body) => {
  await createUserService(body);
  try {
    await sendEmail(body.email, 'SignUp verification', 'Please verify your account');
  } catch (err) {
    console.log(err.message);
    throw new ServiceError(err.message, 403);
  }
};

export const signinService = async (body) => {
  const user = await getUserByUsernameService(body.username);
  if (user == null) {
    throw new ServiceError('unauthorized', 401);
  }
  if (!(await comparePassword(body.password, user.password))) {
    throw new ServiceError('unauthorized', 401);
  }
  return { token: signToken({ id: user.id }, '30d') };
}; 