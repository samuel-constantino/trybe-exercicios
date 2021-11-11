const express = require('express');

const { cepRouter } = require('./routes');
const { error } = require('./middlewares');

require('dotenv').config();

const app = express();

app.get('/', (_req, res, _next) => {
    res.status(200).json({ "message": "pong!" });
});

app.use('/cep', cepRouter);

app.use(error);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
