const express = require('express');

const userController = require('../controllers/userController');

const route = express.Router();

route.get('/', userController.findAll);

route.get('/:id', userController.findByPk);

route.get('/search/:id', userController.findByPkAndEmail);

module.exports = route;