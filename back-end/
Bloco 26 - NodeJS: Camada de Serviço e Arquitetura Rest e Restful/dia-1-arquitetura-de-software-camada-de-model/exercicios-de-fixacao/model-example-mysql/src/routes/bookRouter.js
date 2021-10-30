const express = require('express');

const Book = require('../model/Book');

const rescue = require('express-rescue');

const router = express.Router();

router.get('/', rescue(async (req, res, _next) => {
    const { author_id } = req.query;

    const books = await Book.getAllByAuthorId(author_id);

    return res.status(200).json(books);
}));

module.exports = router;