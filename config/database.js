const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Jcaimen93.",
  database: "sistematicket",
});

module.exports = pool.promise();
