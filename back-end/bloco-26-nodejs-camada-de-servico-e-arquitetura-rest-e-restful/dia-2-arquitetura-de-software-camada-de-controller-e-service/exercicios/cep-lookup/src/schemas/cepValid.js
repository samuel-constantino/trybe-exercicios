const cepValid = (cep) => {
    const CEP_REGEX = /\d{5}-?\d{3}/;

    if(!CEP_REGEX.test(cep)) {
        return { code: 400, message: "CEP inválido" };
    };

    if (cep[5] === '-') {
         return `${cep.substr(0, 5)}${cep.substr(6, 8)}`
    }

    return { cepValided: cep };
};

module.exports = cepValid;
