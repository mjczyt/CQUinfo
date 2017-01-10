var express = require('express');
var router = express.Router();
var superagent = require("superagent");
var EventEmitter = require('events').EventEmitter; 
var studentName='';
var studentId='';
var classTable='';
var grade='';

var event = new EventEmitter(); 

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');

});
router.post("/login", function (request, respons, next) {
  var stdid = request.body.user;
  var stdpwd = request.body.password;
  var week = request.body.week;
  var envent=event.on("classTableReady",function(){
    getGrade(stdid,stdpwd,week,respons);
  })
  getClassTable(stdid,stdpwd,week);
})


function getClassTable(id,pwd,week){
 superagent
 .post('http://cqyou.top:5000/api/schedule')
 .send({
  "stdid": id,
  "stdpwd": pwd,
  "week": week
})
 .set('Content-Type', 'application/json')
 .redirects(0)
 .accept('application/json')
 .end(function (err, res) {
  if (err || !res.ok) {
    console.log('Oh no! error');
  } else {
    studentName=res.body.stuInfo.studentName;
    studentId=res.body.stuInfo.studentId;
    classTable=res.body.classTable;
    event.emit("classTableReady");
    return;
  }
});
}
function getGrade(id,pwd,week,respons){
  superagent
  .post('http://cqyou.top:5000/api/grade')
  .send({
    "stdid": id,
    "stdpwd": pwd,
    "week": week
  })
  .set('Content-Type', 'application/json')
  .redirects(0)
  .accept('application/json')
  .end(function (err, res) {
    if (err || !res.ok) {
      console.log('Oh no! error');
    } else {
      grade=res.body.grade;
      respons.render('user', { name:studentName , id:studentId , classTable: classTable, grade: grade });
      return;

    }
  });
}
module.exports = router;
