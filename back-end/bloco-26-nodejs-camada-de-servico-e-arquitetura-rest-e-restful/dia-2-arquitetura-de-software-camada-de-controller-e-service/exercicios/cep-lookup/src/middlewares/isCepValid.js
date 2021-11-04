const isCepValid = (req, res, next) => {
    const { cep } = req.params;
    const reg = /\d{5}-?\d{3}/;

    if(!reg.test(cep)) {
        return res.status(400).json(
            {
                "error": { "code": "invalidData", "message": "CEP inválido" }
            }
        );
    }

    if (cep[5] === '-') {
        req.params.cep = `${cep.substr(0, 5)}${cep.substr(6, 8)}`
    }

    next();
};

module.exports = isCepValid;
