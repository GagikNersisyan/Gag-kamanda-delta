
import { body } from 'express-validator';
import { validationResultMiddleware } from '../../middlewares/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-message.js';

export const createKeyboardValidator = [
  body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha)
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isLength({ max: 20, min: 3 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(brand)', 3, 20)),
  body('class').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Class'))
    .isIn(['Special', 'Classic', 'Gaming', 'Work'])
    .withMessage(GENERAL_ERRORS.oneOf(['Special', 'Classic', 'Gaming', 'Work'])),
  body('dimensions').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Dimension'))
    .isIn(['100%', 'TKL', '60%', '75%', '65%', '40%'])
    .withMessage(GENERAL_ERRORS.oneOf(['100%', 'TKL', '60%', '75%', '65%', '40%'])),
  body('weight').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Weight'))
    .isFloat({ min: 200, max: 239 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(200, 239)),
  body('file').notEmpty().withMessage(GENERAL_ERRORS.isRequired('ImageName'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Image Name', 2, 150)),
  validationResultMiddleware,
];

export const updateKeyboardValidator = [
  body('brand').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha)
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isLength({ max: 20, min: 3 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(brand)', 3, 20)),
  body('class').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Class'))
    .isIn(['Special', 'Classic', 'Gaming', 'Work'])
    .withMessage(GENERAL_ERRORS.oneOf(['Special', 'Classic', 'Gaming', 'Work'])),
  body('dimensions').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Dimension'))
    .isIn(['100%', 'TKL', '60%', '75%', '65%', '40%'])
    .withMessage(GENERAL_ERRORS.oneOf(['100%', 'TKL', '60%', '75%', '65%', '40%'])),
  body('weight').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Weight'))
    .isFloat({ min: 200, max: 239 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(200, 239)),
  body('file').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('ImageName'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Image Name', 2, 150)),
  validationResultMiddleware,
];