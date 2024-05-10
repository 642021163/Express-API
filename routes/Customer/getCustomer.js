const express = require('express');
const router = express.Router();
const Customer = require('../../models/Customer/Customer');
const handleApiKeyValidation = require('../../middlewares/Customer/handleApiKeyValidation');
const setRequestId = require('../../middlewares/Customer/setRequestId');

router.get('/', setRequestId, handleApiKeyValidation, async (req, res, next) => {
    try {
        const customers = await Customer.find();
        if (!customers) {
            return res.status(404).json({ message: 'Customers not found' });
        
        }
        res.json(customers);
    } catch (err) {
        next(err);
    }
});

module.exports = router;