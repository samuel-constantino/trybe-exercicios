const axios = require('axios');

const connection = require('./connection');

const getExternalCep = async (cep) => {
    try {
        const { data } = await axios(`https://viacep.com.br/ws/${cep}/json/`)
        
        if (data.erro) throw {code: 400, message: "CEP não encontrado"}

        return data;
    } catch( {code, message}) {
        return {code, message};
    }
};

const getCep = async (cep) => {
    try {
        const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';

        const [result] = await connection().execute(query, [cep]);

        if (!result.length) {
            const externalCep = await getExternalCep(cep);
            return externalCep;
        }

        return result[0];
    } catch ({code, message}) {
        return {code, message};
    }
};

const createCep = async (cepData) => {
    try {
        const { cep, logradouro, bairro, localidade, uf } = cepData;
        const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
        
        const result = await connection().execute(query, [cep, logradouro, bairro, localidade, uf]);
        
        if (!result.length) return { code: 500, message: 'Erro ao inserir novo CEP' };


        return getCep(cep);
    }catch ({code, message}) {
        return {code, message};
    }
};

module.exports = {
    getCep,
    createCep,
};
