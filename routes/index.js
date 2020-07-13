var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  const images = ["photo1.jpg","photo2.jpg","photo3.jpg"]
  res.render('home', { title: 'Hello Simploniens ! ', images });
});

module.exports = router;
