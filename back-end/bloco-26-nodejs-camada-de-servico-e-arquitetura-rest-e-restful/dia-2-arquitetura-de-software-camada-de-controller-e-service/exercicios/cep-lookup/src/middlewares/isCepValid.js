const isCepValid = (req, res, next) => {
    const { cep } = req.params;
    const reg = /\d{5}-?\d{3}/;

    if(!reg.test(cep)) return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });

    next();
};

module.exports = isCepValid;
