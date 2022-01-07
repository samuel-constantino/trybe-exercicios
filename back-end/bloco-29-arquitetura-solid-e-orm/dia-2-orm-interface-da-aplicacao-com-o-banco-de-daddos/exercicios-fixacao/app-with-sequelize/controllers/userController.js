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

const findByPk = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: 'Usuário não encontrado',
            });
        };

        return res.status(200).json(user);
    }catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'algo deu errado'});
    }
};

const findByPkAndEmail = async (req, res) => {
    try{
        const { id } = req.params;
        const { email } = req.query;

        const user = await User.findOne({
            where: { id, email },
        });

        if (!user) {
            return res.status(404).json({
                message: 'Usuário não encontrado',
            });
        };

        return res.status(200).json(user);
    }catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'algo deu errado'});
    }
};

module.exports = {
    findAll,
    findByPk,
    findByPkAndEmail,
};
