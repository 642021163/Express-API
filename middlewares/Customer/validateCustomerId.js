const mongoose = require('mongoose');

const validateCustomerId = (req, res, next) => {
    const productId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: 'Invalid Customer ID' });
    }
    next();
};

module.exports = validateCustomerId;