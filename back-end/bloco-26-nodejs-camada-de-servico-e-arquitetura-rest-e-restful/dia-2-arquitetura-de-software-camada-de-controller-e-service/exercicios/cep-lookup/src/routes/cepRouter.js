const express = require('express');

const { getCep } = require('../controllers/cepController');

const route = express.Router();

route.get('/:cep', getCep);

module.exports = route;
