import { ServiceError } from '../../utils/error-handling.js';
import { createUserService } from '../user/user.service.js';
import { sendEmail } from '../../services/node-mailer.js';

export const signupService = async (body) => {
  await createUserService(body);
  try {
    await sendEmail(body.email, 'SignUp verification', 'Please verify your account');
  } catch (err) {
    console.log(err.message);
    throw new ServiceError(err.message, 403);
  }
};