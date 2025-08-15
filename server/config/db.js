import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '',
    database: 'dashboard_personal'
})

export default connection