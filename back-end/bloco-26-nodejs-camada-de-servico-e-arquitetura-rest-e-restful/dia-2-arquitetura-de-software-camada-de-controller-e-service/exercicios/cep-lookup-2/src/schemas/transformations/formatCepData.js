const formatCepData = (cepData) => {
    try {
        const { cep, logradouro, bairro, localidade, uf } = cepData;
        
        const formatedCep = `${cep.substr(0, 5)}-${cep.substr(5, 7)}`;
        
        return { cep: formatedCep, logradouro, bairro, localidade, uf };
    } catch ({code, message}) {
        return {code, message};
    }
};

module.exports = formatCepData;