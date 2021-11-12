const { cepModel } = require('../services');

const getCep = (cep) => {
    try {
        // validação do cep

        // retorno de erro, caso houver

        // consulta ao model

        // retorno de erro, caso houver

        // formatação dos dados

        // retorna cep (objeto)
    } catch ({ code, message }) {
        return { code, message }
    }
};

module.exports = {
    getCep,
}