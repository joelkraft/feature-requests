var express = require('express');
var data = require('../public/data.json');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;
