const express = require('express');

const rescue = require('express-rescue');

const { userRouter } = require('./routes');

const { isUserValid, error } = require('./middlewares');

const app = express();

app.use(express.json());

app.use('/user', 
    rescue(isUserValid),
    rescue(userRouter)
);

app.use(error);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});