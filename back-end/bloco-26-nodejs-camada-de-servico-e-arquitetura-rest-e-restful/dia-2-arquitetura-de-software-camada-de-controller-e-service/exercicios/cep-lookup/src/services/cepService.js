const rescue = require('rescue');

const cepModel = require('../models/cepModel');

const cepDataFormated = (cepData) => {
    const { cep, logradouro, bairro, localidade, uf } = cepData;

    return {
        cep,
        logradouro,
        bairro,
        localidade,
        uf,
      }
};

const getCep = rescue(async (cep) => {
    const cepData = await cepModel.getCep();

    if(!cepData) return { error: { "code": "notFound", "message": "CEP não encontrado" } }

    return cepDataFormated(cepData);
});

module.exports = {
    getCep
};
