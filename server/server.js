const express = require('express')
const app = express()
const port = 3000
let path = require('path')

app.use('/', express.static(path.resolve(__dirname, '../public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
