const connection = require('./connection');

// const { ObjectiId } = require('mongodb');

const getAll = async () => {
    try {
        const db = await connection();
        const users = await db.collection('users').find().toArray();
    
        return users;
    } catch (error) {
        return error.message
    }
}

const create = async (newUser) => {
    try {
        const { firstName, lastName, email, password } = newUser;
    
        const db = await connection();
        const user = await db.collection('users').insertOne({firstName, lastName, email, password});
    
        return {
            id: user.insertedId,
            firstName,
            lastName,
            email
        };
    } catch (error) {
        return error.message
    }
};

module.exports = {
    getAll,
    create
};