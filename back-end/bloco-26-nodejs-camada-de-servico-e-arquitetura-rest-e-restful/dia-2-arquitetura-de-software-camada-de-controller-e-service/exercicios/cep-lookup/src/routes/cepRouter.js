const express = require('express');
const rescue = require('express-rescue');

const cepController = require('../controllers/cepController');
const { isCepValid } = require('../middlewares');

const route = express.Router();

route.get('/:cep',
    rescue(isCepValid),
    cepController.getCep
);

module.exports = route;
