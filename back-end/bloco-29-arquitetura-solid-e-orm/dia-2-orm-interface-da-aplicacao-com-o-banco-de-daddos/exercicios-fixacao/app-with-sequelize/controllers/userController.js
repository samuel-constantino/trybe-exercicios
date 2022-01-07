const { User } = require('../models');

const findAll = async (_req, res) => {
    try{
        const users = await User.findAll();

        return res.status(200).json(users);
    }catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'algo deu errado'});
    }
};

module.exports = {
    findAll,
};
