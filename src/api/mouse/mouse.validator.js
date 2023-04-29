import { body } from 'express-validator';
import { validationResultMiddleware } from '../../middlewares/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-message.js';

export const createMouseValidator = [
  body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(brand)', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('type').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Type'))
    .isLength({ min: 3, max: 20 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(type)'), 3, 20)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha)
    .isIn(['Classic', 'Oval', 'Wired'])
    .withMessage(GENERAL_ERRORS.oneOf(['Classic', 'Oval', 'Wired'])),
  body('maximumResolution').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Maximum Resolution'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(maximumResolution)', 2, 15))
    .isIn(['1000', '2000', '3000', '4000'])
    .withMessage(GENERAL_ERRORS.oneOf(['1000', '2000', '3000', '4000'])),
  body('mouseMaximumResolution').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Mouse Maximum Resolution'))
    .isFloat({ min: 3001, max: 4000 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(3001, 4000)),
  body('interface').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Interface'))
    .isIn(['USB', 'Wireless'])
    .withMessage(GENERAL_ERRORS.oneOf(['USB', 'Wireless'])),
  body('weight').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Weight'))
    .isFloat({ max: 200, min: 130 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(130, 200))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(Weight)', 2, 15)),
  body('file').notEmpty().withMessage(GENERAL_ERRORS.isRequired('ImageName'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Image Name', 2, 150)),
  validationResultMiddleware,
];

export const updateMouseValidator = [
  body('brand').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(brand)', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('type').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Type'))
    .isLength({ min: 3, max: 20 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(type)'), 3, 20)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha)
    .isIn(['Classic', 'Oval', 'Wired'])
    .withMessage(GENERAL_ERRORS.oneOf(['Classic', 'Oval', 'Wired'])),
  body('maximumResolution').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Maximum Resolution'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(maximumResolution)', 2, 15))
    .isIn(['1000', '2000', '3000', '4000'])
    .withMessage(GENERAL_ERRORS.oneOf(['1000', '2000', '3000', '4000'])),
  body('mouseMaximumResolution').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Mouse Maximum Resolution'))
    .isFloat({ min: 3001, max: 4000 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(3001, 4000)),
  body('interface').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Interface'))
    .isIn(['USB', 'Wireless'])
    .withMessage(GENERAL_ERRORS.oneOf(['USB', 'Wireless'])),
  body('weight').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Weight'))
    .isFloat({ max: 200, min: 130 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(130, 200))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name(Weight)', 2, 15)),
  body('file').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('ImageName'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Image Name', 2, 150)),
  validationResultMiddleware,
];