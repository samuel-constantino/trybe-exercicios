const formatCep = (cep) => {
    if (cep[5] === '-') {
        const formatedCep = `${cep.substr(0, 5)}${cep.substr(6, 8)}`

        return formatedCep;
    };
    return cep;
};

module.exports = formatCep;
