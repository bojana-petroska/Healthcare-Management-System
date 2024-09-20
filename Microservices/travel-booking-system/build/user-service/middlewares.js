import { body, validationResult } from 'express-validator';
const userValidation = [
    body('name').isString().notEmpty().withMessage('name is required'),
    body('email').isEmail().notEmpty().withMessage('email is required'),
];
const userValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send(errors);
    }
    next();
};
export default {
    userValidation,
    userValidationHandler,
};
