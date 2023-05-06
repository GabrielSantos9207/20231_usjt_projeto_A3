require('dotenv').config()
const mysql = require('mysql2')


const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.AVAL_DB_NAME,
    connectionLimit:10,
    waitForConnections:true,
})

module.exports = connection.promise()