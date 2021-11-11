const cepModel = require('../models/cepModel');

const cepDataValid = require('../schemas/isCepDataValid');

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

const createCep = async (cepData) => {
    const { cep, logradoutro, bairro, localidade, uf } = cepData;

    const cepData = await cepModel.getCep(cep);

    if (cepData.length) return {
        "error": { "code": "alreadyExists", "message": "CEP já existente" }
    }
    
    const cepDataValided = cepDataValid(cepData);

    if (cepDataValid.error) return cepDataValid;
};

module.exports = {
    getCep,
    createCep
};
