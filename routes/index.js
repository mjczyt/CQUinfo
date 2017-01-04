var express = require('express');
var router = express.Router();
const cmd = require("child_process").exec;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');

});
router.post("/login", function (req, res, next) {
  console.log(req.body);
  cmd("node login " + req.body.user + " " + req.body.password + " " + req.body.week, function (err, stdout, stderr) {
    var content = JSON.parse(stdout);
    res.render('user', { name: content.stuInfo.studentName, id: content.stuInfo.studentId, classTable: content.classTable, grade: content.grade });
  });
  

})

module.exports = router;
