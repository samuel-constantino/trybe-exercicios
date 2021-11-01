// Começamos importando a conexão com o banco
const connection = require('./connection');

const { ObjectId } = require('mongodb');

const formatUser = (document) => {
    // Utilizamos o operador _rest_ (`...`) para guardar o resto das propriedades
    const { _id, password, ...user } = document;

    const formatedUser = {
        id: _id,
        // Utilizamos o operador _spread_ (`...`) para adicionar o resto das propriedades que tínhamos gravado em `user`
        ...user,
    };

    return formatedUser;
};

const getById = async (id) => {
    try {

        if (!ObjectId.isValid(id)) return null;

        const db = await connection();
        const user = await db.collection('users').findOne(new ObjectId(id));
    
        return user;
    } catch (error) {
        return error;
    }
}

const getAll = async () => {
    try {
        const db = await connection();
        const users = await db.collection('users').find().toArray();
    
        return users.map(formatUser);
    } catch (error) {
        return error;
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
        return error;
    }
};

const update = async (user) => {
    const { id, firstName, lastName, email, password } = user;
    try {
        if (!ObjectId.isValid(id)) return null;

        const db = await connection();
        
        await db.collection('users').updateOne(
            { "_id": ObjectId(id) },
            { 
                $set: { 
                    firstName,
                    lastName,
                    email,
                    password
                } 
            }
        );
    
        return {
            id,
            firstName,
            lastName,
            email
        };
    } catch (error) {
        return error;
    }
}

module.exports = {
    getById,
    getAll,
    create,
    update
};