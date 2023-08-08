const express = require('express')
const route = express.Router()
const UserRoutes = require('./UserRoutes')
const ProductRoutes = require('./ProductRoutes')

route.use('/users', UserRoutes)
route.use('/products', ProductRoutes)

module.exports = route