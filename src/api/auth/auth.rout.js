import { Router } from 'express';
import { signupController } from './auth.controller.js';
import { signupValidator } from './auth.validator.js';

const router = Router();

router.post('/signup', ...signupValidator, signupController);

export default router;