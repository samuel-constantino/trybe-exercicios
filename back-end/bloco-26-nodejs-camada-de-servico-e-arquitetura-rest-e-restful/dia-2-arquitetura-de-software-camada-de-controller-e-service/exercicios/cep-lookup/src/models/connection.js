const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'tryber',
    password: '12345678',
    database: 'cep_lookup'
});

module.exports = connection;