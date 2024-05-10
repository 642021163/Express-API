const express = require('express');
const router = express.Router();
const Customer = require('../../models/Customer/Customer');
const validateProductId = require('../../middlewares/Customer/validateCustomerId');
const handleApiKeyValidation = require('../../middlewares/Customer/handleApiKeyValidation');
const setRequestId = require('../../middlewares/Customer/setRequestId');

router.get('/:phone', setRequestId, handleApiKeyValidation, validateProductId, async (req, res, next) => {
    try {
        const customer = await Customer.findOne({ phone: req.params.phone });
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
    } catch (err) {
        next(err);
    }
});

module.exports = router;