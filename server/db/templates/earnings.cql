drop keyspace robinhood;

create keyspace robinhood 
with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE robinHood;

CREATE TABLE company_info (
    ticker TEXT,
    name TEXT,
    PRIMARY KEY (ticker)
);

CREATE TABLE analyst_ratings (
    ticker TEXT,
    name TEXT,
    rating TEXT,
    summary TEXT,
    PRIMARY KEY (ticker)
);
CREATE table earnings (
    ticker TEXT,
    actual DECIMAL,
    estimate DECIMAL,
    quarter TEXT,
    estimates LIST<DECIMAL>,
    PRIMARY KEY (ticker, quarter) )
WITH CLUSTERING ORDER BY (quarter DESC);
