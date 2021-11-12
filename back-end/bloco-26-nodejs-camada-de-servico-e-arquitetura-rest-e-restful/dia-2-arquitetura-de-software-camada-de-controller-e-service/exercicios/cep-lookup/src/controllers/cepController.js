const rescue = require('express-rescue');

const { cepService } = require('../services');

const getCep = rescue(async (req, res) => {
    const { cep } = req.params;
    
    const result = await cepService.getCep(cep);
    
    if (result.code) {
        const { code, message } = result;
        throw { code, message };
    };

    return res.status(200).json(result);
});

const createCep = rescue(async (req, res) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;

    const result = await cepService.createCep({ cep, logradouro, bairro, localidade, uf });
    
    if (result.code) {
        const { code, message } = result;
        throw { code, message };
    };

    return res.status(201).json(result);  
});

module.exports = {
    getCep,
    createCep,
}