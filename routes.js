var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var readFile = require('./readFile.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  console.log(readFile('countries2.json'));
  next();
});




app.listen('9000', ()=> {
  console.log("On port 9000!");
});
