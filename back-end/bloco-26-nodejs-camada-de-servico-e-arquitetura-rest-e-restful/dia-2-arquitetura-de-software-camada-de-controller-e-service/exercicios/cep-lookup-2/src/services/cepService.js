const { cepModel } = require('../models');
const { isCepValid } = require('../schemas/validations');
const { formatCep, formatCepData } = require('../schemas/transformations');

const getCep = async (cep) => {
    try {
        if (!isCepValid(cep)) return { code: 400, message: "CEP inválido" };

        const formatedCep = formatCep(cep);

        const cepData = await cepModel.getCep(formatedCep);

        if (!cepData) return { code: 404, message: "CEP não encontrado" }

        const formatedCepData = formatCepData(cepData[0]);

        return formatedCepData;
    } catch ({ code, message }) {
        return { code, message }
    }
};

module.exports = {
    getCep,
};
