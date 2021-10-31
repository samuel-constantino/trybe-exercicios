const connection = require('./connection');

const getAll = async() => {
    const query = 'SELECT title, author_id FROM model_example.books';
    
    const [ books ] = await connection.execute(query);

    return books;
};

// Retornar apenas livros associados com um determinado author_id .
const getAllByAuthorId = async (id) => {
    const query = 'SELECT title, author_id FROM model_example.books WHERE author_id = ?';

    const [ booksAuthor ] = await connection.execute(query, [id]);

    if (!booksAuthor.length) return null;
    
    return booksAuthor;
};

const getById = async (id) => {
    const query = 'SELECT title, author_id FROM model_example.books WHERE id = ?';
    
    const [ booksData ] = await connection.execute(query, [id]);
    
    if (!booksData.length) return null;

    const { title, author_id } = booksData[0];
    
    const book = {
        title,
        author_id
    };
    
    return book;
}

module.exports = {
    getById,
    getAll,
    getAllByAuthorId,
};