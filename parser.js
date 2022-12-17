const fs = require('fs');
const csvFilePath = './csv';
const csv = require('csvtojson');

const fileContents = fs.readdirSync(csvFilePath);

for (i = 0; i < fileContents.length; i++) {
  const csvFile = './csv/' + fileContents[i];

  csv()
    .fromFile(csvFile)
    .then((jsonObj) => {
      console.log('JSON file: ==>', jsonObj);
      return jsonObj;
    });
}
