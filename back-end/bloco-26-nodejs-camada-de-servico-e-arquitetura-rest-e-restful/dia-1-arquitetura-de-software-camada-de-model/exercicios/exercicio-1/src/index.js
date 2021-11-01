const express = require('express');

const { userRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});