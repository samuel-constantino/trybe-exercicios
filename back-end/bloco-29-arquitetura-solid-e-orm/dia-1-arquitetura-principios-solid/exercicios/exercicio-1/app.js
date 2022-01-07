const express = require('express');
const { json } = require('body-parser');

const plantsRouter = require('./routes/plants');

const app = express();

app.use(json());

app.use('/plants', plantsRouter);

module.exports = app;