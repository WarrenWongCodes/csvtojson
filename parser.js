const csvFilePath = './csv/electronic-card-transactions-november-2022-csv-tables.csv'
const csv = require('csvtojson');

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log('JSON file: ==>', jsonObj);
    return jsonObj
  });
