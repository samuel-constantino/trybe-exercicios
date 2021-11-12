const formatCepData = (cepData) => {
    try {
        const { cep } = cepData;
        
        const formatedCep = `${cep.substr(0, 5)}-${cep.substr(5, 7)}`;
        
        return {...cepData, cep: formatedCep};
    } catch ({code, message}) {
        return {code, message};
    }
};

module.exports = formatCepData;