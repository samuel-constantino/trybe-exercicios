const express = require('express');

const userController = require('../controllers/userController');

const route = express.Router();

route.get('/', userController.findAll)

module.exports = route;