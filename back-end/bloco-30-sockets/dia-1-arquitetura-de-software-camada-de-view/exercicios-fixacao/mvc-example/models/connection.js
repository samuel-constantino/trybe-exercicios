const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'tryber',
    password: '12345678',
    database: 'mvc_example',
});

module.exports = connection;