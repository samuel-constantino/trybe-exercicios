const express = require('express');
const rescue = require('express-rescue');

const cepController = require('../controllers/cepController');
const { isCepValid, isCepDataValid } = require('../middlewares');

const route = express.Router();

route.get('/:cep',
    cepController.getCep
);

route.post('/', cepController.createCep);

module.exports = route;
