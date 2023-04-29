import { body } from 'express-validator';
import { validationResultMiddleware } from '../../middlewares/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-message.js';

export const createHddValidator = [
  body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('type').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Type'))
    .blacklist(' ')
    .isIn(['SSD', 'SATA', 'PATA', 'SCSI'])
    .withMessage(GENERAL_ERRORS.oneOf(['SSD', 'SATA', 'PATA', 'SCSI'])),
  body('productmemory').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Product Menory'))
    .isIn(['3.5-inch', '2.5-inch'])
    .withMessage(GENERAL_ERRORS.oneOf(['3.5-inch', '2.5-inch'])),
  body('capacity').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Capacity'))
    .isFloat({ min: 1, max: 1.9 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(1, 1.9)),
  body('interface').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Interface'))
    .isIn(['SAS', 'PATA', 'SATA'])
    .withMessage(GENERAL_ERRORS.oneOf(['SAS', 'PATA', 'SATA'])),
  body('file').notEmpty().withMessage(GENERAL_ERRORS.isRequired('ImageName'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Image Name', 2, 150)),
  validationResultMiddleware,
];

export const updateHddValidator = [
  body('brand').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('type').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Type'))
    .blacklist(' ')
    .isIn(['SSD', 'SATA', 'PATA', 'SCSI'])
    .withMessage(GENERAL_ERRORS.oneOf(['SSD', 'SATA', 'PATA', 'SCSI'])),
  body('productmemory').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Product Menory'))
    .isIn(['3.5-inch', '2.5-inch'])
    .withMessage(GENERAL_ERRORS.oneOf(['3.5-inch', '2.5-inch'])),
  body('capacity').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Capacity'))
    .isFloat({ min: 1, max: 1.9 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(1, 1.9)),
  body('interface').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Interface'))
    .isIn(['SAS', 'PATA', 'SATA'])
    .withMessage(GENERAL_ERRORS.oneOf(['SAS', 'PATA', 'SATA'])),
  body('file').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('ImageName'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Image Name', 2, 150)),
  validationResultMiddleware,
];