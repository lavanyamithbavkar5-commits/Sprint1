const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'security',
  database: 'crm_dashboard'
});

module.exports = db;