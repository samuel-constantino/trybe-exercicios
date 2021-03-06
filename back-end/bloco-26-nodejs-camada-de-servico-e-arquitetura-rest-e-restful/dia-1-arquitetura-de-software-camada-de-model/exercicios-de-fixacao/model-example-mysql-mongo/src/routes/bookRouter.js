const express = require('express');

const Book = require('../model/Book');

const rescue = require('express-rescue');
const isValidBook = require('../middlewares/isValidBook');

const router = express.Router();

router.get('/', rescue(async (req, res, _next) => {
    const { author_id } = req.query;
    let books;
    
    if (!author_id || author_id === '') {
        books = await Book.getAll();
    } else {
        books = await Book.getAllByAuthorId(author_id);
    };

    return res.status(200).json(books);
}));

router.get('/:id', rescue(async (req, res, _next) => {
    const { id } = req.params;

    const book = await Book.getById(id);    

    if (!book) return res.status(404).json({ message: 'Not found' } );

    return res.status(200).json(book);
}));

router.post('/',
    rescue(isValidBook),
    rescue(async (req, res, _next) => {
        const { title, author_id } = req.body;
        
        await Book.create(title, author_id);

        res.status(201).json({message: 'Livro criado com sucesso!'});
    })
);

module.exports = router;