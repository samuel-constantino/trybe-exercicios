const cepModel = require('../models/cepModel');
const { cepValid, isCepDataValid } = require('../schemas');

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
    try {

        const result = cepValid(cep);

        if (result.code) return { code: 400, message: result.message };

        const { cepValided } = result;

        const cepData = await cepModel.getCep(cepValided);
    
        if(!cepData.length) return { code: 404, message: "CEP não encontrado" };
    
        const cepDataFormated = cepDataFormat(cepData[0]);
    
        return cepDataFormated;
    }catch ({code, message}) {
      return { code, message };  
    };
};

const createCep = async (cepData) => {
    try {
        const cepDataValided = isCepDataValid(cepData);

        if (cepDataValided.code) return { code: cepDataValided.code, message: cepDataValided.message };

        const { cep, logradoutro, bairro, localidade, uf } = cepData;


    } catch ({ code, message }) {
        return { code, message };
    }



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
