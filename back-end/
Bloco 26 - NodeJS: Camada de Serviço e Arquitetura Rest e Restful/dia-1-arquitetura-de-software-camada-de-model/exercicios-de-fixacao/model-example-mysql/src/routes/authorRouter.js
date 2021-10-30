const express = require('express');

const Author = require('../model/Author');

const rescue = require('express-rescue');

const router = express.Router();

router.get('/', rescue(async (_req, res, _next) => {
    const authors = await Author.getAll();
    
    return res.status(200).json(authors);
}));

router.get('/:id', rescue(async (req, res, _next) => {
    const { id } = req.params;

    const author = await Author.getById(id);
    console.log(author)
    if (!author) return res.status(404).json({message: "Autor não encontrado"});
    
    return res.status(200).json(author);
}));

module.exports = router;