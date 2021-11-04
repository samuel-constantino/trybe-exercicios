const cepService = require('../models/cepService');
const rescue = require('express-rescue');

const getCep = rescue(async (req, res, _next) => {
    const { cep } = req.params;
    const cepData = cepService.getCep(cep);

    if(cepData.error) return cepData.error;

    res.status(200).json(cepData);
})

module.exports = {
    getCep
};