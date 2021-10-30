const express = require('express');

const Author = require('../model/Author');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
    const authors = await Author.getAll();
    
    return res.status(200).json(authors);
});

router.get('/:id', async (req, res, _next) => {
    const { id } = req.params;

    const authors = await Author.getAll();

    const author = authors.find((a) => a.id === +id);
    
    return res.status(200).json(author);
});

module.exports = router;