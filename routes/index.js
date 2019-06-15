var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Validate' });
});

router.post('/', function(req, res, next) {
  /*
  Block of code to check the api creds here...

  */

  var result =  "Success: "+ req.body.company + " exist !"
  res.render('index', {title: result});
});
module.exports = router;
