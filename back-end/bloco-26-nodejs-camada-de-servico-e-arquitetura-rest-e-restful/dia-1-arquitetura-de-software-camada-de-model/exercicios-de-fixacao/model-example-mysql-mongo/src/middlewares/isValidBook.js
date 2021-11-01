const { ObjectId } = require('mongodb');
const connection = require('../model/connection');

const isAuthorIdValid = async (authorId) => {
    /*
    BLOCO DE CÓDIGO USADO COM MYSQL
    const query = 'SELECT id FROM model_example.authors WHERE id = ?';
    
    const [ id ] = await connection.execute(query, [authorId]);

    if (!id[0]) return false;

    return true;
    */

    if (!ObjectId.isValid(authorId)) return false;

    const db = await connection();
    const author = await db.collection('authors').findOne(new ObjectId(authorId));

    if (!author) return false;

    return true;
};

const isValidBook = (req, res, next) => {
    const { title, author_id } = req.body;

    if (!title || title === '' || title.length < 3) return res.status(400).json({message: 'Bad Request: título inválido'});

    if (!author_id || author_id === '' || !isAuthorIdValid(author_id)) return res.status(400).json({message: 'Bad Request: título inválido'});
    
    next();
};
    
module.exports = isValidBook;