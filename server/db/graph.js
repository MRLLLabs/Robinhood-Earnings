const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const graphSchema = new mongoose.Schema({
  company: String,
  symbol: String,
  data: [
    {
      date: String,
      estimated: Number,
      actual: Number,
    }
  ],
  scale: String
})

const Graph = mongoose.model('Graph', graphSchema);

module.exports = Graph;
