const express = require('express')
const route = express.Router()
const ProductController = require('../controllers/ProductControllers')

route.get('/get-products', ProductController.getProducts)

module.exports = route