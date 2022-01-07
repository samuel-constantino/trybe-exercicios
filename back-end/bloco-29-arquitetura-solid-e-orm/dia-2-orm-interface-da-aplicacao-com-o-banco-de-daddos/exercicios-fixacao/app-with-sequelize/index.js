const express = require('express');

const app = express();

const router = express.Router();

const { User } = require('./models');

app.get('/', async (_req, res) => {
    try{
        const users = await User.findAll();

        return res.status(200).json(users);
    }catch(e) {
        console.log(e.message)
        res.status(500).json({message: 'algo deu errado'});
    }
});

app.listen(3000, () => console.log('Ouvindo na porta 3000'));