
import { body } from 'express-validator';
import { validationResultMiddleware } from '../../middlewares/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-message.js';

export const createUserValidator = [
  body('email').isEmail().withMessage(GENERAL_ERRORS.emailValidation),
  body('firstName').notEmpty().withMessage(GENERAL_ERRORS.isRequired('First Name'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('lastName').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Last Name'))
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
export const updateUserValidator = [
  body('email').optional().isEmail().withMessage(GENERAL_ERRORS.emailValidation),
  body('name').optional()
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  validationResultMiddleware,
];

export const updateUserAsAdminValidator = [
  body('role').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Role'))
    .isIn(['ADMIN'])
    .withMessage(GENERAL_ERRORS.oneOf(['ADMIN'])),
  validationResultMiddleware,
];


export const createAdminAsSuperAdminValidator = [
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
  body('role').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Role'))
    .isIn(['admin'])
    .withMessage(GENERAL_ERRORS.oneOf(['admin'])),
  validationResultMiddleware,
];