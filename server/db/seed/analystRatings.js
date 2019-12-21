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
  let companyName = '';
  let ticker = [65,65,65,65,65];
  let summary = '';
  let rating = '';
  let ratingChoices = ['BUY', 'SELL', 'HOLD'];

  fs.appendFileSync('./companyTickers.csv', csvContent, function(err, data) {
    if (err) {
      console.log('errorin create');
    }
  });
  for(let i = 0; i < 1000000; i++) {
    ticker = tickerProcessor(ticker);
    for(let j = 0; j < 5; j++){
        csvContent = '';
        analystName = `${faker.name.firstName()} ${faker.name.lastName()}`;
        summary = faker.lorem.paragraph();
        rating = ratingChoices[Math.floor(Math.random()*3)];
        csvContent += ticker.map(number => String.fromCharCode(number)).join('');
        csvContent += `, ${analystName}`;
        csvContent += `, ${rating}`;
        csvContent += `, ${summary}\n`;
        fs.appendFileSync('./analystRatings.csv', csvContent, function(err, data) {
          if (err) {
            console.log('errorin create');
          }
        });
    }
  }
}

createTicker();