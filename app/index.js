const express = require('express')
const app = express()
const router = require('./route.js');

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use('/',router);
app.listen(8000, () => {
  console.log('http://127.0.0.1:8000')
})
