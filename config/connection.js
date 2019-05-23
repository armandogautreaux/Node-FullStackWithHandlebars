var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'rt_db'
});

connection.connect(function(err) {
  if (err) {
    console.log(err.stack);
  }
  console.log(connection.threadId);
});

module.exports = connection;

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();
