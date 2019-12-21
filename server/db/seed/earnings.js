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
  let csvContent = 'ticker,name, rating,summary\n';
  let actual = 0;
  let ticker = [65,65,65,65,65];
  let estimate = 0;
  let quarter = '';
  let quarters = ['2019Q3', '2019Q2', '2019Q1', '2018Q4', '2018Q3', '2018Q2', '2018Q1', '2017Q4'];
  let estimates = [];

  fs.appendFileSync('./companyTickers.csv', csvContent, function(err, data) {
    if (err) {
      console.log('errorin create');
    }
  });
  for(let i = 0; i < 1000000; i++) {
    ticker = tickerProcessor(ticker);
    tickerChar = ticker.map(number => String.fromCharCode(number)).join('');
    
    
    for(let j = 0; j < 8; j++) {
      csvContent = '';
      actual = faker.random.number({min: 10, max: 500, precision: 0.01}).toFixed(2);
      estimate = (actual * (1 + Math.random() * .1)).toFixed(2);
      estimates = [];
      quarter = quarters[j]
      
      for(let k = 0; k < 12; k++) {
          estimates.push((actual * (1 + Math.random() * .1)).toFixed(2));
      }
      csvContent += `${tickerChar}|${actual}|${estimate}|${quarter}|[${estimates}]\n`;
      fs.appendFileSync('./earnings.csv', csvContent, function(err, data) {
        if (err) {
          console.log('errorin create');
        }
      });
    }
  }
}

createTicker();