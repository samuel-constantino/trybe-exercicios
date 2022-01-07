const express = require('express');

const userController = require('../controllers/userController');

const route = express.Router();

route.get('/', userController.findAll);

route.get('/:id', userController.findByPk);

route.get('/search/:id', userController.findByPkAndEmail);

route.post('/', userController.create);

route.put('/:id', userController.update);

route.delete('/:id', userController.remove);

module.exports = route;