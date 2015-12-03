var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("just backslash");
  res.render('index', { title: 'Express' });
});

router.get('/mm', function(req, res, next) {
	console.log("mm");
  res.render('index', { title: 'Matt\'s page' });
});

router.get('/error', function(req, res, next) {
	console.log("mm");
  res.render('error', { title: 'Matt\'s page' });
});

module.exports = router;
