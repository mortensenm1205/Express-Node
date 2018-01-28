var fs = require('fs');


function readData(filename) {
  let body = "";

  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if(err) {
        reject(new Error("whoops"));
      }
      body = JSON.parse(data);
      resolve(body);
    });
  });
};


module.exports = function(filename) {
  readData(`${__dirname}/${filename}`).then((message) => {
    console.log(message[0].name, message[0].capital);
  });
}
