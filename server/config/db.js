import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '1744',
    database: 'dashboard_personal'
})

export default connection