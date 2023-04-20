import { signupService, signinService } from './auth.service.js';

export const signupController = async (req, res, next) => {
  try {
    await signupService(req.body);
    return res.send({ massage: 'success' });
  } catch (err) {
    next(err);
  }
};

export const signinController = async (req, res, next) => {
  try {
    const pc = await signinService(req.body);
    return res.send(pc);
  } catch (err) {
    next(err);
  }
};