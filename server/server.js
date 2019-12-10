const express = require('express')
const path = require('path')
const Graph = require('./db/graph.js')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use(cors())
app.use(express.urlencoded());
app.use('/', express.static(path.resolve(__dirname, '../public')))


app.get('/earnings/getData', (req, res) => {
  Graph.find({id: req.query.id}, (err, data) => {
    if (err) {
      throw err
    }
    if (data.length === 0) {
      res.writeHead(404)
      res.end("data not found")
    } else {
      res.writeHead(200)
      //  right now hard coded to take in the first chart
      res.end(JSON.stringify(data[0]))
    }
  })
})

module.exports = app
