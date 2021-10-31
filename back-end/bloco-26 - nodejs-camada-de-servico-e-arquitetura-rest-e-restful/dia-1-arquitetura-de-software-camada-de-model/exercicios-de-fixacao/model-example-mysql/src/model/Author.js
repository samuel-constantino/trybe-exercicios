const { authorRouter } = require('../routes');
const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = (authorData) => {
    const { id, firstName, middleName, lastName } = authorData;

    const fullName = [firstName, middleName, lastName]
        .filter((name) => name)
        .join(' ');

    const newAuthor = {
        id,
        firstName,
        middleName,
        lastName,
        fullName,
    }

    return newAuthor;
}

// Converte o nome dos campos de snake_case para camelCase
const serialize = ({ id, first_name, middle_name, last_name }) => ({
    id,
    firstName: first_name,
    middleName: middle_name,
    lastName: last_name,
});

// Busca todos os autores do banco.
const getAll = async() => {
    const [ authors ] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors',
    );

    return authors.map(serialize).map(getNewAuthor);

};

// Busca pelo id
const getById = async(authorId) => {
    const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'

    const [ authorData ] = await connection.execute(query, [authorId]);
    
    if (!authorData.length) return null;

    const { firstName, middleName, lastName } = serialize(authorData[0]);

    const author = {
        id: authorId,
        firstName,
        middleName,
        lastName
    }

    return author;
}

module.exports = {
    getAll,
    getById
};