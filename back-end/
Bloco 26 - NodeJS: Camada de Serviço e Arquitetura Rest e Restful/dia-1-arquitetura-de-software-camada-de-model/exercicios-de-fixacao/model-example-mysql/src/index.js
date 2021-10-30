const express = require('express');

const { authorRouter, bookRouter } = require('./routes');

const { error } = require('./middlewares');

const app = express();

app.use('/authors', authorRouter);

// Receber uma query string com a chave author_id , e retornar apenas os livros associados.
app.use('/books', bookRouter);

app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
