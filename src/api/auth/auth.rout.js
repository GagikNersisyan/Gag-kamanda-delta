import { Router } from 'express';
import { signupController, signinController } from './auth.controller.js';
import { signupValidator, signinValidator } from './auth.validator.js';

const router = Router();

router.post('/signup', ...signupValidator, signupController);
router.post('/signin', ...signinValidator, signinController);

export default router;