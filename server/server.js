const express = require('express')
const path = require('path')
const Graph = require('./db/graph.js')
const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use('/', express.static(path.resolve(__dirname, '../public')))


app.get('/getData', (req, res) => {
  let symbol = req.url.split('=')[1]
  Graph.find({}, (err, data) => {
    if (err) {
      throw err
    }
    if (data.length === 0) {
      res.writeHead(404)
      res.end("data not found")
    } else {
      res.writeHead(200)
      res.end(JSON.stringify(data[symbol]))
    }
  })
})

module.exports = app
