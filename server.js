// DEPENDENCIES
var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./controllers/dogsController');
var PORT = process.env.PORT || 3000;

// START EXPRESS
var app = express();

//Public Folders
app.use(express.static('public'));

//MIddleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Routes
//pass routes in express
app.use(routes);

//START PROJECT CALLING PORT IN LINSTENING EXPRESS
app.listen(PORT, function() {
  console.log('Server listening' + PORT);
});
