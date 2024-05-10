const express = require('express');
const router = express.Router();
const Customer = require('../../models/Customer/Customer');
const { validateCustomerData, handleValidationErrors } = require('../../middlewares/Customer/validateCustomerData');
const setRequestId = require('../../middlewares/Customer/setRequestId');
const handleApiKeyValidation = require('../../middlewares/Customer/handleApiKeyValidation');

router.post('/', setRequestId, validateCustomerData,handleApiKeyValidation, handleValidationErrors, async (req, res, next) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (err) {
        next(err);
    }
});

module.exports = router;