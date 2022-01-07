const express = require('express');

const { json } = require('body-parser');

const app = express();

const userRouter = require('./routers/userRouter');

app.use(json());

app.use('/user', userRouter);

module.exports = app;