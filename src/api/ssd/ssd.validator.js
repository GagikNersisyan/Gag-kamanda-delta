import { body } from 'express-validator';
import { validationResultMiddleware } from '../../utils/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-messages.js';

export const createMouseValidator = [
    body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .matches(/^[A-Z]/)
        .withMessage(GENERAL_ERRORS.firstLetterUppercase)
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('type').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Type'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('memory').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Memory'))
]
export const updateMouseValidator = [
    body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .matches(/^[A-Z]/)
        .withMessage(GENERAL_ERRORS.firstLetterUppercase)
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('type').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Type'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('memory').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Memory'))
]