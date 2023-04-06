import { body } from 'express-validator';
import { validationResultMiddleware } from '../../utils/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-messages.js';
export const createCaseValidator = [
    body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('class').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Class'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('processor').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Processor'))
        .isString()
        .withMessage(GENERAL_ERRORS.isString),
    body('ram').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('RAM', 2, 150)),
    validationResultMiddleware,
];
export const updateCaseValidator = [
    body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('class').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Class'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('processor').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Processor'))
        .isString()
        .withMessage(GENERAL_ERRORS.isString),
    body('ram').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
    .isString()
    .withMessage(GENERAL_ERRORS.isString)
    .isLength({ min: 2, max: 150 })
    .withMessage(GENERAL_ERRORS.fieldMinMax('RAM', 2, 150)),
    validationResultMiddleware,
];