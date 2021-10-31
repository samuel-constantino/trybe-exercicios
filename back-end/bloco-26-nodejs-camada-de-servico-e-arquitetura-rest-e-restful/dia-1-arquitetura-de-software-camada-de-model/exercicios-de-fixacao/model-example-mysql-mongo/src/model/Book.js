const connection = require('./connection');

const { ObjectId } = require('mongodb');

const getAll = async() => {
    /*
    // BLOCO DE CÓDIGO USADO COM MYSQL
    const query = 'SELECT title, author_id FROM model_example.books';
    
    const [ books ] = await connection.execute(query);

    return books;
    */

    return connection()
        .then((db) => db.collection('books').find().toArray())

};

// Retornar apenas livros associados com um determinado author_id .
const getAllByAuthorId = async (id) => {
    /*
    // BLOCO DE CÓDIGO USADO COM MYSQL
    const query = 'SELECT title, author_id FROM model_example.books WHERE author_id = ?';

    const [ booksAuthor ] = await connection.execute(query, [id]);

    if (!booksAuthor.length) return null;
    
    return booksAuthor;
    */

    return connection()
        .then((db) => db.collection('books').find({author_id: +id}).toArray())
};

const getById = async (id) => {
    /*
    BLOCO DE CÓDIGO USADO COM MYSQL
    const query = 'SELECT title, author_id FROM model_example.books WHERE id = ?';
    
    const [ booksData ] = await connection.execute(query, [id]);
    
    if (!booksData.length) return null;

    const { title, author_id } = booksData[0];
    
    const book = {
        title,
        author_id
    };
    
    return book;
    */
}

const create = async (title, authorId) => {
    const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';
    await connection.execute(query, [title, authorId]);
};

module.exports = {
    getById,
    getAll,
    getAllByAuthorId,
    create,
};