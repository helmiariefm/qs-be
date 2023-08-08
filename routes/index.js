const express = require('express')
const route = express.Router()
const UserRoutes = require('./UserRoutes')
const ProductRoutes = require('./ProductRoutes')
const OrderRoutes = require('./OrderRoutes')

route.use('/users', UserRoutes)
route.use('/products', ProductRoutes)
route.use('/orders', OrderRoutes)

module.exports = route