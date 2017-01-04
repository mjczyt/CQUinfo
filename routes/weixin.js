var express = require('express');
var router = express.Router();
var crypto = require("crypto");

function sha1(str){
  var md5sum = crypto.createHash("sha1");
  md5sum.update(str);
  str = md5sum.digest("hex");
  return str;
}
/* GET users listing. */
router.get('/', function (req, res, next) {

  var signature = req.query.signature;
  var nonce = req.query.nonce;
  var timestamp = req.query.timestamp;
  var echostr = req.query.echostr;
  var temArray = [timestamp, "CQYOU", nonce].sort();
  var tem = temArray.join('');
  var scyptoString = sha1(tem);
  if(scyptoString==signature){
    res.send(echostr);
  }else{console.log(tem)}

  
});

module.exports = router;
