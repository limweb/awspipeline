var express = require('express');
var router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello Worldx');
});

router.post('/hello', (req, res) => {
  var body = req.body;
  res.send('Hello '+body.name);
});

module.exports = router;
