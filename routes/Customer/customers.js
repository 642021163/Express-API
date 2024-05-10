const express = require('express');
const router = express.Router();
// const getProducts = require('./getProducts');
const createProduct = require('./createCustomer');
const getCustomer = require('./getCustomer');
const getCustomerByPhone = require('./getCustomerByPhone');
// const updateProduct = require('./updateProduct');
// const deleteProduct = require('./deleteProduct');
// const getProductById = require('./getProductById');

// router.get('/', getProducts);
// router.get('/:id', getProductById, (req, res) => { res.json(req.product); });
router.post('/', createProduct);
router.get('/', getCustomer);
router.get('/:phone', getCustomerByPhone);
// router.put('/:id', getProductById, updateProduct);
// router.delete('/:id', getProductById, deleteProduct);

module.exports = router;