const express = require('express')
const route = express.Router()
const OrderController = require('../controllers/OrderController')

route.get('/list', OrderController.orderList)
route.post('/:prodid', OrderController.order)

module.exports = route