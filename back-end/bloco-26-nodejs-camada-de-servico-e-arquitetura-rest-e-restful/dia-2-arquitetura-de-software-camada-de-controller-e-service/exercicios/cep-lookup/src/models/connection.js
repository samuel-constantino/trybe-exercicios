const mysql = require('mysql2/promise');
require('dotenv').config();

let conn = null;

const connection = () => {
    return conn ? conn
    : mysql.createPool({
        host: process.env.HOST,
        user: process.env.DATABASEUSER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    });
}

module.exports = connection;