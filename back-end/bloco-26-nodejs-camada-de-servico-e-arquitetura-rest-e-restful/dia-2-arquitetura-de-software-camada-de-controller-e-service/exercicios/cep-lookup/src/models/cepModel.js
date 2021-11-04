const connection = require('./connection');

const getCep = async (cep) =>{
    const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
    const [cepData] = await connection.execute(query, [cep]);
    return cepData;
};

module.exports = {
    getCep,
}