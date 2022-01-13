const Author = require('../models/Author');

const listAturhors = async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).render('authors/index', { authors })
};

module.exports = {
    listAturhors,
};
