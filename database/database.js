const mysql = require('mysql2')

const pool = mysql.createPool({
    hots: 'localhost',
    user: 'root',
    password: '',
    database: 'crud-react-node'
})

module.exports = pool.promise()