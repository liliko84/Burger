const mysql = ("mysql");

require("dotenv").config();

//create connection

const connection = mysql.createConnection({
  host:"localhost",
  port:3306,
  user:process.env.DB_USER,
  password:process.env.DB_NAME,
  database:process.env.DB_NAME
});

module.export = connection;