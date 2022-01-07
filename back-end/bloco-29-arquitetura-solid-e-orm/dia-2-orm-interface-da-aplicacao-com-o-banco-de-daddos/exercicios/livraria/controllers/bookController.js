const { Book } = require('../models');

const findAll = async (_req, res) => {
    try{
        const books = await Book.findAll();

        if (!books) {
            return res.status(404).json({
                message: 'Livro não encontrado'
            });
        }

        return res.status(200).json(books);
    }catch(e){
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado'} );
    }
};

module.exports = {
    findAll,
};
