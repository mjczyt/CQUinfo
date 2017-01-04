var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  var signature = req.query.signature;
  var nonce = req.query.nonce;
  var timestamp = req.query.timestamp;
  var echostr = req.query.echostr;
  var temArray = [timestamp, "CQYOU", nonce].sort();
  var tem = temArray.join('');
  if(tem==signature){
    res.send(echostr);
  }else{console.log(tem)}

  
});

module.exports = router;
