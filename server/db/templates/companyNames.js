const fs = require('fs');

let companyNames = {}

const loadCompanies = new Promise ((res, rej) => {
  fs.readFile(__dirname + '/companies.csv', 'utf8', (err, data) => {
    if (err) {
      throw err
    }
    let splitted = data.split("\n");
    for (var i = 1; i < splitted.length - 1; i++){
      let dataSplit = splitted[i].split(",");
      companyNames[dataSplit[1]] = dataSplit[0]
    }
    res();
  })

});

const setupCompanies = () => {
  return loadCompanies.then((res) => {
    return companyNames
  })
}
module.exports = setupCompanies()
