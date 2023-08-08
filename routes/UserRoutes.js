const express = require('express')
const route = express.Router()
const UserController = require('../controllers/UserControllers')

route.post('/login', UserController.login)

module.exports = route