import { body } from 'express-validator';
import { validationResultMiddleware } from '../../utils/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-messages.js';

export const createKeyboardValidator = [
    body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('type').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Type'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('class').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Class'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('interface').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Interface'))
        .isIn(['Wireless', 'Bluetooth', 'Unifying Dongle'])
        .withMessage(GENERAL_ERRORS.oneOf(['Wireless', 'Bluetooth', 'Unifying Dongle'])),
        body('color').notEmpty().withMessage(GENERAL_ERRORS.isRequired('color'))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
        validationResultMiddleware,
];
export const updateKeyboardValidator = [
    body('brand').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Brand'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('type').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Type'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('class').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Class'))
        .isLength({ min: 2, max: 15 })
        .withMessage(GENERAL_ERRORS.fieldMinMax('Name', 2, 15))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
    body('interface').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Interface'))
        .isIn(['Wireless', 'Bluetooth', 'Unifying Dongle'])
        .withMessage(GENERAL_ERRORS.oneOf(['Wireless', 'Bluetooth', 'Unifying Dongle'])),
        body('color').notEmpty().withMessage(GENERAL_ERRORS.isRequired('color'))
        .isAlpha()
        .withMessage(GENERAL_ERRORS.isAlpha),
        validationResultMiddleware,
]