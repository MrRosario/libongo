const mysql = require('mysql');

const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'Libongo',
    password : 'mysql1994',
    //multipleStatements: true
});

module.exports = con;