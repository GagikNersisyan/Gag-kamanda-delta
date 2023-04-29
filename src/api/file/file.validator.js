import { body } from 'express-validator';
import { validationResultMiddleware } from '../../utils/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-message.js';

export const createFileValidator = [
  body('email').isEmail().withMessage(GENERAL_ERRORS.emailValidation),
  body('name').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Name'))
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
  body('school').notEmpty().withMessage(GENERAL_ERRORS.isRequired('School'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15)),
  validationResultMiddleware,
];
export const updateFileValidator = [
  body('email').optional().isEmail().withMessage(GENERAL_ERRORS.emailValidation),
  body('name').optional()
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  validationResultMiddleware];