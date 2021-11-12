const CEP_REGEX = /\d{5}-?\d{3}/;

const isCepValid = (cep) => {
    const isCepValid = CEP_REGEX.test(cep);

    if (!isCepValid) return false;

    return true;
};

module.exports = isCepValid;
