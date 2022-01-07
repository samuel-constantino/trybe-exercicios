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

const findByPk = async (req, res) => {
    try{
        const { id } = req.params;

        const book = await Book.findByPk(id);

        if (!book) {
            return res.status(404).json({
                message: 'Livro não encontrado'
            });
        }

        return res.status(200).json(book);
    }catch(e){
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado'} );
    }
};

const create = async (req, res) => {
    try{
        const { title, author, pageQuantity } = req.body;

        const createdBook = await Book.create({
            title,
            author,
            page_quantity: pageQuantity,
        });

        if (!createdBook) {
            return res.status(404).json({
                message: 'Erro ao inserir livro'
            });
        }

        return res.status(200).json(createdBook);
    }catch(e){
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado'} );
    }
};

const update = async (req, res) => {
    try{
        const { title, author, pageQuantity } = req.body;
        const { id } = req.params;

        const [updatedBook] = await Book.update(
            {
                title,
                author,
                page_quantity: pageQuantity,
            },
            {
                where: { id },
            }
        );

        if (!updatedBook) {
            return res.status(404).json({
                message: 'Erro ao atualizar livro'
            });
        }

        return res.status(200).json({ message: 'livro atualizado com sucesso' });
    }catch(e){
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado'} );
    }
};

const remove = async (req, res) => {
    try{
        const { id } = req.params;

        const removedBook = await Book.destroy({ where: { id } });
        
        if (!removedBook) {
            return res.status(404).json({
                message: 'Livro não encontrado'
            });
        }

        return res.status(200).json({ message: 'Livro removido com sucesso' });
    }catch(e){
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado'} );
    }
};

module.exports = {
    findAll,
    findByPk,
    create,
    update,
    remove,
};
