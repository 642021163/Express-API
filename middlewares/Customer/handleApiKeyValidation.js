const yaml = require('js-yaml');
const fs = require('fs');

const configData = yaml.load(fs.readFileSync('config.yaml', 'utf8'));
const API_KEY_CUSTOMER = configData.API_KEY_CUSTOMER;

const handleApiKeyValidation = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== API_KEY_CUSTOMER ) {
        console.log(API_KEY_CUSTOMER);
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

module.exports = handleApiKeyValidation;