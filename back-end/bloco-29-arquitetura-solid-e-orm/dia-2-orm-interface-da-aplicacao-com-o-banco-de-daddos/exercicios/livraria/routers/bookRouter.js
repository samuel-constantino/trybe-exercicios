const express = require('express');

const bookController = require('../controllers/bookController');

const route = express.Router();

route.get('/', bookController.findAll);

route.get('/:id', bookController.findByPk);

route.post('/', bookController.create);

route.put('/:id', bookController.update);

route.delete('/:id', bookController.remove);

module.exports = route;
