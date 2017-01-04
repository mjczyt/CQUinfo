var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
if(req.query.signature=="2b572620057cb9c2a47c0639c88001c61edbf9ab"){
  res.send(req.query.echostr);
}else{console.log(req.query.signature);}
});

module.exports = router;
