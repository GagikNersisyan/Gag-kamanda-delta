import { body } from 'express-validator';
import { validationResultMiddleware } from '../../middlewares/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-messages.js';

export const createLaptopValidator = [
  body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('screenSize').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Screen Size'))
    .isFloat({ min: 2, max: 30 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(2, 30)),
  body('screenType').notEmpty().withMessage(GENERAL_ERRORS.isRequired('screenType'))
    .blacklist(' ')
    .isIn(['IPS', 'AMOLED'])
    .withMessage(GENERAL_ERRORS.oneOf(['IPS', 'AMOLED'])),
  body('resolution').notEmpty().withMessage(GENERAL_ERRORS.isRequired('screenType'))
    .blacklist(' ')
    .isIn(['1280x720', '1920x1080', '2560x1440', '3840x2160'])
    .withMessage(GENERAL_ERRORS.oneOf(['1280x720', '1920x1080', '2560x1440', '3840x2160'])),
  body('cpu').notEmpty().withMessage(GENERAL_ERRORS.isRequired('CPU'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('CPU', 2, 150)),
  body('ram').notEmpty().withMessage(GENERAL_ERRORS.isRequired('RAM'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('RAM', 2, 150)),
  validationResultMiddleware,
  body('ssd').notEmpty().withMessage(GENERAL_ERRORS.isRequired('SSD'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('SSD', 2, 150)),
  body('gpu').notEmpty().withMessage(GENERAL_ERRORS.isRequired('GPU'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('GPU', 2, 150)),
  body('file').notEmpty().withMessage(GENERAL_ERRORS.isRequired('ImageName'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Image Name', 2, 150)),
  validationResultMiddleware,
];

export const updateLaptopValidator = [
  body('brand').optional()
    .notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isLength({ min: 2, max: 15 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
    .matches(/^[A-Z]/)
    .withMessage(GENERAL_ERRORS.firstLetterUppercase)
    .isAlpha()
    .withMessage(GENERAL_ERRORS.isAlpha),
  body('screenSize').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('Screen Size'))
    .isFloat({ min: 2, max: 30 })
    .withMessage(GENERAL_ERRORS.isFromToNumber(2, 30)),
  body('screenType').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('screenType'))
    .blacklist(' ')
    .isIn(['IPS', 'AMOLED'])
    .withMessage(GENERAL_ERRORS.oneOf(['IPS', 'AMOLED'])),
  body('resolution').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('screenType'))
    .blacklist(' ')
    .isIn(['1280x720', '1920x1080', '2560x1440', '3840x2160'])
    .withMessage(GENERAL_ERRORS.oneOf(['1280x720', '1920x1080', '2560x1440', '3840x2160'])),
  body('cpu').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('CPU'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('CPU', 2, 150)),
  body('ram').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('RAM'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('RAM', 2, 150)),
  validationResultMiddleware,
  body('ssd').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('SSD'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('SSD', 2, 150)),
  body('gpu').optional().notEmpty().withMessage(GENERAL_ERRORS.isRequired('GPU'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('GPU', 2, 150)),
  validationResultMiddleware];