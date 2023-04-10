import { body } from 'express-validator';
import { validationResultMiddleware } from '../../utils/validation-result.js';
import { GENERAL_ERRORS } from '../../utils/error-messages.js';

export const createPcValidator = [
    body('case').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Case')),
    body('hdd').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Hdd')),
    body('keyboard').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Keyboard')),
    body('file').notEmpty().withMessage(GENERAL_ERRORS.isRequired('File')),
    body('mouse').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Mouse')),
    body('ram').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Ram')),
    body('ssd').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Ssd')),
    validationResultMiddleware];

    export const updatePcValidator = [
        body('case').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Case')),
        body('hdd').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Hdd')),
        body('keyboard').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Keyboard')),
        body('file').notEmpty().withMessage(GENERAL_ERRORS.isRequired('File')),
        body('mouse').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Mouse')),
        body('ram').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Ram')),
        body('ssd').notEmpty().withMessage(GENERAL_ERRORS.isRequired('Ssd')),
        validationResultMiddleware];