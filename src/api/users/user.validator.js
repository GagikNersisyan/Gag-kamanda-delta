import { body } from 'express-validator';
import { validationResultMiddleware } from '../../utils/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-messages.js';

export const createUserValidator = [
  body('email').isEmail().withMessage(GENERAL_ERRORS.emailValidation),
  body('name').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Name'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  validationResultMiddleware,
];
export const updateUserValidator = [
  body('email').optional().isEmail().withMessage(GENERAL_ERRORS.emailValidation),
  body('name').optional()
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  validationResultMiddleware];

