const express = require('express');

const bookController = require('../controllers/bookController');

const route = express.Router();

route.get('/', bookController.findAll);

module.exports = route;
