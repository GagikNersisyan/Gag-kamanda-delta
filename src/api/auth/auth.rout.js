
import { Router } from 'express';
import {
  signupController, signinController, verifyEmailController, newVerificationController,
} from './auth.controller.js';
import {
  signupValidator, signinValidator, verifyValidator, newVerificationValidator,
} from './auth.validator.js';

const router = Router();

router.post('/signup', ...signupValidator, signupController);
router.post('/signin', ...signinValidator, signinController);
router.post('/verify', ...verifyValidator, verifyEmailController);
router.post('/new-verification', ...newVerificationValidator, newVerificationController);

export default router;