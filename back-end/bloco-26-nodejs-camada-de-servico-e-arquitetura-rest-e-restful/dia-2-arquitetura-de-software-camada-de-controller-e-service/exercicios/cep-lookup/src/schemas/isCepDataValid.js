const Joi = require('joi');

const isCepDataValid = () => {

    const schema = Joi.object({
        cep: Joi.string().not().empty().required().pattern(new RegExp('^\d{5}-\d{3}$')),
    
    });

    if (schema.error) {
        return { error: { "code": "invalidData", "message": "<mensagem do Joi>" } };
    }
};

module.exports = isCepDataValid;