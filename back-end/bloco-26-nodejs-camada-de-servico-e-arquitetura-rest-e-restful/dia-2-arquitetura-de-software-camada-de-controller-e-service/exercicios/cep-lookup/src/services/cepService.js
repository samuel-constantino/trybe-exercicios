const rescue = require('express-rescue');

const cepModel = require('../models/cepModel');

const cepDataFormat = (cepData) => {
    const { cep, logradouro, bairro, localidade, uf } = cepData;

    const formatedCep = `${cep.substr(0,5)}-${cep.substr(5, 7)}`;

    return {
        cep: formatedCep,
        logradouro,
        bairro,
        localidade,
        uf,
      }
};

const getCep = async (cep) => {
    const cepData = await cepModel.getCep(cep);

    if(!cepData.length) return { error: { "code": "notFound", "message": "CEP não encontrado" } }

    const cepDataFormated = cepDataFormat(cepData[0]);

    return cepDataFormated;
};

module.exports = {
    getCep
};
