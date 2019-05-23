var express = require('express');
var router = express.Router();

var dog = require('../models/dog');

router.get('/', function(req, res) {
  dog.all(function(data) {
    var ob = {
      animals: data
    };
    res.render('index', ob);
  });
});

module.exports = router;
