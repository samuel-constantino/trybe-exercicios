const connection = require('./connection');

const getCep = async (cep) =>{
    try {
        const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
        const [cepData] = await connection.execute(query, [cep]);
        return cepData;
    }catch ({code, message}) {
        return { code, message };  
    };
};

module.exports = {
    getCep,
}