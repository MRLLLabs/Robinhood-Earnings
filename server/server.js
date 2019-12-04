const express = require('express')
const path = require('path')
const Graph = require('./db/graph.js')
const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use('/', express.static(path.resolve(__dirname, '../public')))


app.get('/getData', (req, res) => {
  Graph.find({}, (err, data) => {
    if (err) {
      throw err
    }
    res.writeHead(200)
    if (data.length === 0) {
      res.end("data not found")
    } else {
      res.end(JSON.stringify(data))
    }
  })
})

module.exports = app
