import {
  signupService, signinService, verifyEmailService, newVerificationService,
} from './auth.service.js';

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

export const verifyEmailController = async (req, res, next) => {
  try {
    await verifyEmailService(req.body);
    return res.send({ message: 'Verified' });
  } catch (err) {
    next(err);
  }
};

export const newVerificationController = async (req, res, next) => {
  try {
    await newVerificationService(req.body);
    return res.send({ message: 'sended new verification' });
  } catch (err) {
    next(err);
  }
};