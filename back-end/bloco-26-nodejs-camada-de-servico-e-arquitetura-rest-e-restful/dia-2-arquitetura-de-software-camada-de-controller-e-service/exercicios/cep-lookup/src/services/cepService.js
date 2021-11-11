const cepModel = require('../models/cepModel');
const { cepValid } = require('../schemas');

// const cepDataValid = require('../schemas/isCepDataValid');

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
    
        if(!cepData.length) return { code: 400, message: "CEP não encontrado" };
    
        const cepDataFormated = cepDataFormat(cepData[0]);
    
        return cepDataFormated;
    }catch ({code, message}) {
      return { code, message };  
    };
};

// const createCep = async (cepData) => {
//     const { cep, logradoutro, bairro, localidade, uf } = cepData;

//     const cepData = await cepModel.getCep(cep);

//     if (cepData.length) return {
//         "error": { "code": "alreadyExists", "message": "CEP já existente" }
//     }
    
//     const cepDataValided = cepDataValid(cepData);

//     if (cepDataValid.error) return cepDataValid;
// };

module.exports = {
    getCep,
    // createCep
};
