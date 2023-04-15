import { signupService } from './auth.service.js';

export const signupController = async (req, res, next) => {
  try {
    const pc = await signupService(req.body);
    return res.send(pc);
  } catch (err) {
    next(err);
  }
};