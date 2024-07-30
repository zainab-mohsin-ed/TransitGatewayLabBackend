const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Educative123",
database:"recipes_db" 
})

module.exports = db;