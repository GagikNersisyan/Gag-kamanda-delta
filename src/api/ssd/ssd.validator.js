
import { body } from 'express-validator';
import { validationResultMiddleware } from '../../middlewares/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-message.js';

export const createSsdValidator = [
  body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('memory').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Memory'))
    .isFloat({ min: 100, max: 512 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(100, 512)),
  body('capacity').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Capacity'))
    .isFloat({ min: 480, max: 959 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(480, 959)),
  body('interface').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Interface'))
    .blacklist(' ')
    .isLength({ min: 3, max: 20 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 3, 20))
    .matches(/^[A-Z]/)
    .isIn(['NVme', 'SAS', 'SATA'])
    .withMessage(GENERAL_ERRORS.oneOf(['NVme', 'SAS', 'SATA'])),
  body('formFactor').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Form Factor'))
    .isFloat({ min: 2.0, max: 3.0 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(2.0, 3.0)),
  body('file').notEmpty().withMessage(GENERAL_ERRORS.isRequired('ImageName'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Image Name', 2, 150)),
  validationResultMiddleware,
];

export const updateSsdValidator = [
  body('brand').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('memory').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Memory'))
    .isFloat({ min: 100, max: 512 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(100, 512)),
  body('capacity').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Capacity'))
    .isFloat({ min: 480, max: 959 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(480, 959)),
  body('interface').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Interface'))
    .blacklist(' ')
    .isLength({ min: 3, max: 20 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 3, 20))
    .matches(/^[A-Z]/)
    .isIn(['NVme', 'SAS', 'SATA'])
    .withMessage(GENERAL_ERRORS.oneOf(['NVme', 'SAS', 'SATA'])),
  body('formFactor').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Form Factor'))
    .isFloat({ min: 2.0, max: 3.0 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(2.0, 3.0)),
  body('file').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('ImageName'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Image Name', 2, 150)),
  validationResultMiddleware,
];