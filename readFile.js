var fs = require('fs');


function readData(filename) {
  let body = "";

  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/${filename}`, 'utf8', (err, data) => {
      if(err) {
        reject(new Error("whoops"));
      }
      body = JSON.parse(data);
      resolve(body);
    });
  });
};

module.exports = readData;
