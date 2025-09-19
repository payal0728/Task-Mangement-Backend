require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host     :process.env.HOST,
    user     :process.env.DB_USER,
    password :process.env.DB_PASSWORD,
    database :process.env.DB_NAME,
})

connection.connect(function(err) {
  if (err) {
    console.error('error while connecting: ' + err.stack);
    return;
  }
 
  console.log('database connected successfully');
});


module.exports = connection