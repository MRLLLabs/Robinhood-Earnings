const mongoose = require('mongoose');
const env = process.env.NODE_ENV;
const host = env === "production" ? "database" : "localhost";
const mongoUri = `mongodb://localhost/graph`;

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
