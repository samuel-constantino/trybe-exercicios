const Author = require('../models/Author');

const listAturhors = async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).render('authors/index', { authors })
};

const showAuthor = async (req, res) => {
    const { id } = req.params;

    const author = await Author.findById(id);

    if (!author) return res.status(404).render('authors/404');

    res.status(200).render('authors/show', { author });
};

module.exports = {
    listAturhors,
    showAuthor,
};
