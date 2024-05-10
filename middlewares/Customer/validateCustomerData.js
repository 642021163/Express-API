const { body, validationResult } = require('express-validator');

const validateCustomerData = [
    body('name').notEmpty().withMessage('please name is required'),
    body('lastName').notEmpty().withMessage('please lastname is required'),
    body('email').notEmpty().withMessage('please email is required'),
    body('phone').notEmpty().withMessage('please phone is required').isNumeric().withMessage('please phone must be a number')
];

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(error => {
            return {
                code: 400,
                type: 'Schema Invalid',
                description: error.msg,
                detail: error.param,
                traceId: req.xRequestId
            };
        });
        return res.status(400).json({ errors: formattedErrors });
    }
    next();
};

module.exports = { validateCustomerData, handleValidationErrors };