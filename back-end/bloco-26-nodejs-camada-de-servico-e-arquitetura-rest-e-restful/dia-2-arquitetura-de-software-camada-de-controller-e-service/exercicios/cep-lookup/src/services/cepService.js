const rescue = require('express-rescue');

const cepModel = require('../models/cepModel');

const cepDataFormated = (cepData) => {
    const { cep, logradouro, bairro, localidade, uf } = cepData;

    const formatedCep = `${cep.substr(0,5)}-${cep.substr(5, 7)}`;
    console.log(formatedCep)

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

    return cepDataFormated(cepData[0]);
};

module.exports = {
    getCep
};
