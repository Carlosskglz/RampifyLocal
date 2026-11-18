require('dotenv').config();
const mysql = require('mysql2');

// Pool de conexiones; los datos vienen del .env (nunca escritos en el código)
const pool = mysql.createPool({
  host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, waitForConnections: true, connectionLimit: 10, queueLimit: 0,
});
pool.on('connection', (c) => c.query("SET time_zone = '-06:00'"));     // America/Mexico_City (sin horario de verano)
module.exports = pool.promise();