import { body } from 'express-validator';
import { validationResultMiddleware } from '../../utils/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-messages.js';

export const signupValidator = [
  body('email').isEmail().withMessage(GENERAL_ERRORS.emailValidation),
  body('firstName').notEmpty().withMessage(GENERAL_ERRORS.isRequired('firstName'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('lastName').notEmpty().withMessage(GENERAL_ERRORS.isRequired('lastName'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('username').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Username'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15)),
  body('password').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Password'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isStrongPassword(),
  validationResultMiddleware,
];