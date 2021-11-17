const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
    const db = await connection();

    const movies = await db.collection('movies');

    const { insertedId: id } = await movies.insertOne({title, directedBy, releaseYear});

    return id;
};

module.exports = {
    create,
};
