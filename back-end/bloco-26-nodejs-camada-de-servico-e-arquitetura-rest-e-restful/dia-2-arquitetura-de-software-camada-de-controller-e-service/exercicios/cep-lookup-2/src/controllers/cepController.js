const rescue = require('express-rescue');

const { cepService } = require('../services');

const getCep = rescue(async (req, res, next) => {
    const { cep } = req.params;
    
    const result = await cepService.getCep(cep);

    if (result.code) {
        const { code, message } = result;
        next({ code, message });
    }

    res.status(200).json(result);
});

module.exports = {
    getCep,
    // createCep,
}