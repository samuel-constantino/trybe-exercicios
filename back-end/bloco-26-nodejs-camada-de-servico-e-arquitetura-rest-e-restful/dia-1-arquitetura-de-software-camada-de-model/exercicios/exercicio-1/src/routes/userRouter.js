const express = require('express');

const { isUserValid } = require('../middlewares');

const User = require('../model/User');

const route = express.Router();

route.get('/:id', async (req, res, _next) => {
    const { id } = req.params;

    const user = await User.getById(id);

    if (!user) return res.status(200).json({
        "error": true,
        "message": "Usuário não encontrado"
    });

    res.status(200).json(user);
});

route.get('/', async (_req, res, _next) => {
    const users = await User.getAll();

    res.status(200).json(users);
});

route.post('/',
    isUserValid,
    async (req, res, _next) =>{
    const { firstName, lastName, email, password } = req.body;

    const result = await User.create({firstName, lastName, email, password});

    res.status(201).json(result);
    }
);

route.put('/:id',
    isUserValid,
    async (req, res, _next) => {
        const { firstName, lastName, email, password } = req.body;
        const { id } = req.params;

        const user = await User.update({
            id,
            firstName,
            lastName,
            email,
            password
        });

        if (!user) return res.status(404).json({
            "error": true,
            "message": "Usuário não encontrado"
        })

        res.status(200).json(user);
    }
);

module.exports = route;