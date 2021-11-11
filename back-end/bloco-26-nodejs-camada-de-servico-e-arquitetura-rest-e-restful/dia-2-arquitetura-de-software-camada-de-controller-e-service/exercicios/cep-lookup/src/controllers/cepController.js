const cepService = require('../services/cepService');
const rescue = require('express-rescue');

const getCep = rescue(async (req, res, _next) => {
    const { cep } = req.params;
    const cepData = await cepService.getCep(cep);

    if(cepData.error) return res.status(404).json(cepData.error);

    return res.status(200).json(cepData);
});

const createCep = rescue(async (req, res, _next) => {
    const { cep, logradoutro, bairro, localidade, uf } = req.body;

    const message = await cepService.createCep({ cep, logradoutro, bairro, localidade, uf });

    if(message.error) return res.status(404).json(cepData.error);

    return res.status(200).json(message);
})

module.exports = {
    getCep,
    createCep
};