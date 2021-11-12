const connection = require('./connection');

const getCep = async (cep) => {
    try {
        const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';

        const [result] = await connection().execute(query, [cep]);

        return result.length && result[0];
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
