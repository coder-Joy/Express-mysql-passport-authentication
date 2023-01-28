const mysql = require('mysql');

const MysqlOptions = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'student'
}

const connection = mysql.createConnection(MysqlOptions);

connection.connect((err, res)=>{
    if(err) console.error(`The error was ${err} and ${err.stack}`);
    return res;
})
module.exports = {
    connection
}