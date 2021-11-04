const express = require('express');

const { cepRouter } = require('./routes');

const app = express();

app.get('/', (_req, res, _next) => {
    res.status(200).json({ "message": "pong!" });
});

app.use('/cep', cepRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
