const express = require('express')
const bodyParser = require('body-parser')
const router = require('./route.js');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use('/',router);
app.listen(8000, () => {
  console.log('http://127.0.0.1:8000')
})
