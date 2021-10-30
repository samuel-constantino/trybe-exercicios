const connection = require('./connection');

// Retornar apenas livros associados com um determinado author_id .
const getByAuthorId = (books, authorId) => {
    const booksAuthor = books.filter((b) => b.author_id === +authorId);

    return booksAuthor;
};

const getAllByAuthorId = async (authorId) => {
    const [ books ] = await connection.execute(
        'SELECT title, author_id FROM model_example.books'
    );

    const booksAuthor = getByAuthorId(books, authorId);
    
    return booksAuthor;
};

module.exports = {
    getAllByAuthorId,
};