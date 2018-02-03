var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var readFile = require('./readFile.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  fs.readFile('countries2.json', 'utf8', (err, data) => {
    if (err) throw err;
    obj = JSON.parse(data);
    res.write(JSON.stringify(obj[0]));
  });

  readFile('countries2.json').then((message) => {
    res.write(JSON.stringify(message[1]));
    res.end();
  });
});

app.listen('9000', ()=> {
  console.log("On port 9000!");
});
