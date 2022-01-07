const express = require('express');

const { json } = require('body-parser');

const bookRouter = require('./routers/bookRouter');

const app = express();

app.use(json());

app.use('/books', bookRouter);

module.exports = app;
