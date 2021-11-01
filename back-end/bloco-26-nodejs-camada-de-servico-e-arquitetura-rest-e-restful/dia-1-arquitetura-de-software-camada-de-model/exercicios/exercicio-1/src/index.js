const express = require('express');

const rescue = require('express-rescue');

const { error } = require('./middlewares');

const { userRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/user', rescue(userRouter)
);

app.use(error);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});