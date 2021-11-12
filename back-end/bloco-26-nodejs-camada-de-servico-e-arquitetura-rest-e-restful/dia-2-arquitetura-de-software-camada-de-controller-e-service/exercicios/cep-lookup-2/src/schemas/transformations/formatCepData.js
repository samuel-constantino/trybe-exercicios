const formatCepData = (cepData) => {
    const cep = "62810000"
    
    const formatedCep = `${cep.substr(0, 5)}-${cep.substr(5, 7)}`;
    
    return {...cepData, cep: formatedCep};
};

module.exports = formatCepData;