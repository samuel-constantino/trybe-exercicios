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

const create = async (req, res) => {
    try{
        const { fullName, email, phoneNum } = req.body;

        const newUser = await User.create({
            fullName,
            email,
            phone_num: phoneNum,
        });

        return res.status(200).json(newUser);
    }catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'algo deu errado'});
    }
};

const update = async (req, res) => {
    try{
        const { fullName, email, phoneNum } = req.body;

        const { id } = req.params;

        const [updatededUser] = await User.update(
            {
                fullName,
                email,
                phone_num: phoneNum,
            },
            {
                where: { id },
            }
        );

        if(!updatededUser) {
            return res.status(404).json({
                message: "Usuario não encontrado"
                }
            );
        }

        return res.status(200).json({message: "usuario atualizado com sucessp"});
    }catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'algo deu errado'});
    }
};

const remove = async (req, res) => {
    try{
        const { id } = req.params;

        const deletedUser = await User.destroy(
            { where: { id } },
        );

        return res.status(200).json({
            message: "Usuário removido com sucesso"
        });
    }catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'algo deu errado'});
    }
};

module.exports = {
    findAll,
    findByPk,
    findByPkAndEmail,
    create,
    update,
    remove
};
