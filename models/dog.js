var orm = require('../config/orm');

var dog = {
  all: function(cb) {
    orm.all('dogs', function(res) {
      cb(res);
    });
  }
};

module.exports = dog;
