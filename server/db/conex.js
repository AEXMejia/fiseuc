const mysql2 = require('mysql2/promise');

module.exports = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fiseuc'
}).then((connection) => {
    console.log('Conectado a la base de datos');
    return connection;
});