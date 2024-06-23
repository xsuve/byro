const mysql = require('mysql');
const colors = require('colors');
const config = require('../config/config.js');

// Create a connection to the database
const connection = mysql.createConnection({
  host: config.HOST,
  port: config.PORT,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) {
    console.log('[Papers API] '.red + 'Could not connect to the database.');
  } else {
    console.log('[Papers API] '.green + 'Successfully connected to the database.');
  }
});

module.exports = connection;
