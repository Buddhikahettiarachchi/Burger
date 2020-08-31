var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.sendFile(path.join(__dirname),'public','hi.js')
  var options = {
    root: path.join(__dirname, '/../dist/angular')
  }

  return res.sendFile('index.html',options);
});

/* GET home page. */
router.get('/work', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
