const {
    getPlants,
} = require('../plants');

const getAll = (_req, res, _next) => {
    try{
        const plants = getPlants();
        res.status(200).json({ plants });
    }catch(e) {
        res.status(500).json({message: "Erro desconhecido"});
    }
};

module.exports = {
    getAll,
};
