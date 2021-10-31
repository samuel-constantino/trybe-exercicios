const connection = require('./connection');

// adiciona uma string com o nome completo do autor
const setFullName = (author) => {
    const { id, firstName, middleName, lastName } = author;

    // filtra nomes diferentes de null e junta todos, separando por espaço.
    const fullName = [firstName, middleName, lastName]
        .filter((name) => name)
        .join(' ');

    return {
        id,
        firstName,
        middleName,
        lastName,
        fullName,
    };
}

// Serializa os nomes, convertendo as chaves das propriedades de snake_case para camelCase
const serialize = ({ id, first_name, middle_name, last_name }) => ({
    id,
    firstName: first_name,
    middleName: middle_name,
    lastName: last_name,
});

// Busca todos os autores do banco.
const getAll = async () => {
    const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors';

    const [ authors ] = await connection.execute(query);

    return authors.map(serialize).map(setFullName);
};

// Busca pelo id
const getById = async (id) => {
    const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'

    const [ authors ] = await connection.execute(query, [id]);
    
    if (!authors.length) return null;

    const { firstName, middleName, lastName } = serialize(authors[0]);

    const author = setFullName({
        id,
        firstName,
        middleName,
        lastName
    });

    return author;
}

const create = async (firstName, middleName, lastName) => {
    const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)';

    await connection.execute(query, [firstName, middleName, lastName]);
};

module.exports = {
    getAll,
    getById,
    create,
};