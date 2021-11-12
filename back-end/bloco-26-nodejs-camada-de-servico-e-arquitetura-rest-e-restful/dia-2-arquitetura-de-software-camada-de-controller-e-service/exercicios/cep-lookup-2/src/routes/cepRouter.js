const express = require('express');
const { cepController } = require('../controllers');

const route = express.Router({mergeParams: true});

route.get('/:cep', cepController.getCep);

// route.post('/', cepController.creteCep);

module.exports = route;
