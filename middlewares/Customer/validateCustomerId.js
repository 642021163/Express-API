const validateCustomerId = (req, res, next) => {
    const phone = req.params.phone;
    
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
        return res.status(400).json({ message: 'Invalid Phone number' });
    }
    next();
};

module.exports = validateCustomerId;
