const formatCepData = (cepData) => {
    const { cep } = cepData;
    
    const formatedCep = `${cep.substr(0, 5)}-${cep.substr(5, 7)}`;
    
    return {...cepData, cep: formatedCep};
};

module.exports = formatCepData;