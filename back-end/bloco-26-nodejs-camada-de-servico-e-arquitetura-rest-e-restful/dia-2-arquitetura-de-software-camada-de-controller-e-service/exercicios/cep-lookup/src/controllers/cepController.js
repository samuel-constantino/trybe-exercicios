const cepService = require('../services/cepService');
const rescue = require('express-rescue');

const getCep = rescue(async (req, res, _next) => {
    const { cep } = req.params;
    const result = await cepService.getCep(cep);
    
    if(result.code) return res.status(result.code).json({ message: result.message });

    return res.status(200).json(result);
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