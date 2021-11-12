const { cepModel } = require('../models');
const { isCepValid, isCepDataValid } = require('../schemas/validations');
const { formatCep, formatCepData } = require('../schemas/transformations');

const getCep = async (cep) => {
    try {
        if (!isCepValid(cep)) return { code: 400, message: "CEP inválido" };

        const formatedCep = formatCep(cep);

        const cepData = await cepModel.getCep(formatedCep);

        if (cepData.code) return { code: 404, message: "CEP não encontrado" }

        const formatedCepData = formatCepData(cepData);
        
        return formatedCepData;
    } catch ({ code, message }) {
        return { code, message }
    }
};

const createCep = async (cepData) => {
    try {
        // verifica se informações do cep são válidas
        const { code, message } = isCepDataValid(cepData);
        if (code) return { code, message };

        const formatedCep = formatCep(cepData.cep);
        // verificar se CEP já existe no banco
        const cepExists = await cepModel.getCep(formatedCep);
        if (cepExists) throw {code: 409, message: "CEP já existe"}

        // insere novo CEP
        const result = await cepModel.createCep({...cepData, cep: formatedCep});
        
        if (result.code) {
            const { code, message } = result;
            throw { code, message };
        }
        return formatCepData(result);

    }catch ({code, message}) {
        return {code, message};
    }
};

module.exports = {
    getCep,
    createCep,
};
