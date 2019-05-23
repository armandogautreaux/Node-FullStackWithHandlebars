var connection = require('../config/connection');

var orm = {
  all: function(tableInput, cb) {
    var queryString = 'SElECT * FROM ' + tableInput + ';';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
