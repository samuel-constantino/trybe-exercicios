const connection = require('./connection');

const { ObjectId } = require('mongodb');

const getById = async (id) => {
    try {

        if (!ObjectId.isValid(id)) return null;

        const db = await connection();
        const user = await db.collection('users').findOne(new ObjectId(id));
    
        return user;
    } catch (error) {
        return error.message
    }
}

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

const update = async (user) => {
    const { id, firstName, lastName, email, password } = user;
    try {
        if (!ObjectId.isValid(id)) return null;

        const db = await connection();
        
        await db.collection('users').updateOne(
            { "_id": ObjectId(id) },
            { 
                $set: { 
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "password": password
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
        return error.message
    }
}

module.exports = {
    getById,
    getAll,
    create,
    update
};