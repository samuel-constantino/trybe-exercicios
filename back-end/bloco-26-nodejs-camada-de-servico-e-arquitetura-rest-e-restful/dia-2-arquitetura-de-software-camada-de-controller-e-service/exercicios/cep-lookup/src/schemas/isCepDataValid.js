const Joi = require('joi');

const isCepDataValid = (cepData) => {

    const schema = Joi.object({
        cep: Joi.string().not().empty().required().pattern(new RegExp('^\d{5}-\d{3}$')),
        logradouro: Joi.string().not().empty().required(),
        bairro:Joi.string().not().empty().required(),
        localidade:Joi.string().not().empty().required(),
        uf: Joi.string().not().empty().max(2).required(),
    
    });

    const { error } = schema.validate(cepData);

    if (error) return { code: 400, message: 'Dados do CEP inválidos' }

    return '';
};

module.exports = isCepDataValid;