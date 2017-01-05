var express = require('express');
var router = express.Router();
var superagent = require("superagent");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');

});
router.post("/login", function (request, respons, next) {
  var stdid = request.body.user;
  var stdpwd = request.body.password;
  var week = request.body.week;
  superagent
    .post('http://cqyou.top:5000/api/schedule')
    .send({
      "stdid": stdid,
      "stdpwd": stdpwd,
      "week": week
    })
    .set('Content-Type', 'application/json')
    .redirects(0)
    .accept('application/json')
    .end(function (err, res) {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        respons.render('user', { name: res.body.stuInfo.studentName, id: res.body.stuInfo.studentId, classTable: res.body.classTable, grade: res.body.grade });

      }
    });

})

module.exports = router;
