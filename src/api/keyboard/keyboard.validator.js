import { body } from 'express-validator';
import { validationResultMiddleware } from '../../middlewares/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-messages.js';

export const createKeyboardValidator = [
  body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('type').notEmpty().withMessage(GENERAL_ERRORS.isRequired('TYPE'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 30 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('TYPE', 2, 30)),
  body('class').notEmpty().withMessage(GENERAL_ERRORS.isRequired('CLASS'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 30 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('CLASS', 2, 30)),
  body('interface').notEmpty().withMessage(GENERAL_ERRORS.isRequired('INTERFACE'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 30 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('INTERFACE', 2, 30)),
  validationResultMiddleware,
];

export const updateKeyboardValidator = [
  body('brand').optional()
    .notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('type').notEmpty().withMessage(GENERAL_ERRORS.isRequired('TYPE'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 30 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('TYPE', 2, 30)),
  body('class').notEmpty().withMessage(GENERAL_ERRORS.isRequired('CLASS'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 30 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('CLASS', 2, 30)),
  body('interface').notEmpty().withMessage(GENERAL_ERRORS.isRequired('INTERFACE'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 30 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('INTERFACE', 2, 30)),
  validationResultMiddleware,
];