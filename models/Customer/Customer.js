const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true }
    
    
})

module.exports = mongoose.model('Customer', CustomerSchema)