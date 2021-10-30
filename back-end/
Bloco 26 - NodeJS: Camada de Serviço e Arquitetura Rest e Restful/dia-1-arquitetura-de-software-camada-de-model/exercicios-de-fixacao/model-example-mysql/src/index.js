const express = require('express');

const Book = require('./model/Book');
const { authorRouter } = require('./routes');

const app = express();

app.use('/authors', authorRouter);

// Receber uma query string com a chave author_id , e retornar apenas os livros associados.
app.get('/books', async (req, res, _next) => {
    const { author_id } = req.query;

    const books = await Book.getAllByAuthorId(author_id);

    return res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
