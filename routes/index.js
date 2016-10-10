var express = require('express');
var router = express.Router();
var path = require('path');

// vendor scripts
router.get('/vendor/angular.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular', 'angular.js'));
});

router.get('/vendor/angular-route.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular-route', 'angular-route.js'));
});

module.exports = router;
