# Robinhood-Earnings

Setup steps:
1. `npm install`
2. run `npm run build`
If you're developing, you need to use npm run build:watch
3. run `npm run db:setup`
4. `npm start`


## API Endpoints

# Create a quarterly earnings
POST to /earnings/:ticker&:quarter

```
earning = {
    quarter: '2019Q3',
    estimate: 32.5,
    actual: 35.3,
    estimates: [33, 39.5, 29.3, 32, 40]
}
```

# Returns last 8 quarterly earnings
GET to /earnings/:ticker

[
    earning = {
    quarter: '2019Q3',
    estimate: 32.5,
    actual: 35.3,
    estimates: [33, 39.5, 29.3, 32, 40]
    },
    earning = {
    quarter: '2019Q2',
    estimate: 29.8,
    actual: 30.2,
    estimates: [33, 39.5, 29.3, 32, 40]
    },
    earning = {
    quarter: '2019Q1',
    estimate: 22.5,
    actual: 25.3,
    estimates: [33, 39.5, 29.3, 32, 40]
    },
    earning = {
    quarter: '2018Q4',
    estimate: 32.5,
    actual: 35.3,
    estimates: [33, 39.5, 29.3, 32, 40]
    },
    earning = {
    quarter: '2018Q3',
    estimate: 32.5,
    actual: 35.3,
    estimates: [33, 39.5, 29.3, 32, 40]
    },
    earning = {
    quarter: '2018Q2',
    estimate: 32.5,
    actual: 35.3,
    estimates: [33, 39.5, 29.3, 32, 40]
    },
    earning = {
    quarter: '2018Q1',
    estimate: 37.2,
    actual: 32.3,
    estimates: [33, 39.5, 29.3, 32, 40]
    },
    earning = {
    quarter: '2017Q4',
    estimate: 31.5,
    actual: 37.3,
    estimates: [33, 39.5, 29.3, 32, 40]
    },



]

# Updates a quarterly earning
PUT to /earning/:ticker&:quarter

```
earning = {
    quarter: '2019Q3',
    estimate: 32.5,
    actual: 35.3,
    estimates: [33, 39.5, 29.3, 32, 40]
}
```

# Delete a quarterly earning
DELETE to /earnings/:ticker&:quarter