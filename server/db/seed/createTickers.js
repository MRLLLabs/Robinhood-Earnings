const fs = require('fs');
const faker = require('faker');

const tickerProcessor = (arr) => {
  arr[4]++;
  for(let i = 4; i > 0; i--){
    if(arr[i] > 80){
      arr[i - 1]++;
      arr[i] = 65;
    }
  }
  return arr;
}

const createTicker = function() {
  let csvContent = 'ticker,name\n';
  let companyName = '';
  let ticker = [65,65,65,65,65];

  fs.appendFileSync('./companyTickers.csv', csvContent, function(err, data) {
    if (err) {
      console.log('errorin create');
    }
  });
  for(let i = 0; i < 1000000; i++) {
    csvContent = '';
    ticker = tickerProcessor(ticker);
    companyName = `${faker.name.lastName()} ${faker.company.companySuffix()}`;
    csvContent += ticker.map(number => String.fromCharCode(number)).join('');
    csvContent += ',' + companyName + '\n';
    fs.appendFileSync('./companyTickers.csv', csvContent, function(err, data) {
      if (err) {
        console.log('errorin create');
      }
    });
  }
}

createTicker();