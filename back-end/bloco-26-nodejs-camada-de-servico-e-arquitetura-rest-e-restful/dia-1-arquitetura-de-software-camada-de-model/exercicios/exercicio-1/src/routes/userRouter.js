const express = require('express');

const User = require('../model/User');

const route = express.Router();

route.get('/', async (_req, res, _next) => {
    const users = await User.getAll();

    res.status(200).json(users);
});

route.post('/', async (req, res, _next) =>{
    const { firstName, lastName, email, password } = req.body;

    const result = await User.create({firstName, lastName, email, password});

    res.status(201).json(result);
})

module.exports = route;