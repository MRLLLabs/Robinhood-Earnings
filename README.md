# Robinhood-Earnings

Setup steps:
1. `npm install`
2. run `npm run build`
If you're developing, you need to use npm run build:watch
3. run `npm run db:setup`
4. `npm start`


API Endpoints

Create a quarterly earnings
POST to /earnings/:ticker&:quarter

earning = {
    quarter: '2019Q3',
    estimate: 32.5,
    actual: 35.3,
    estimates: [33, 39.5, 29.3, 32, 40]
}

Read
Returns last 8 quarterly earnings
GET to /earnings/:ticker

Update
Updates a quarterly earning
PUT to /earning/:ticker&:quarter

earning = {
    quarter: '2019Q3',
    estimate: 32.5,
    actual: 35.3,
    estimates: [33, 39.5, 29.3, 32, 40]
}

Delete
Delete a quarterly earning
DELETE to /earnings/:ticker&:quarter