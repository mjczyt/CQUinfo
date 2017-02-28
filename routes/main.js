var express = require('express');
var router = express.Router();
var config = require('.././config')
var superagent = require("superagent");

var weixinModel = require("./weixinModel");
var studentModel = require("./studentModel")

/* GET users listing. */
router.get('/:openid', function(req, res, next) {
    var info = {
        openid: req.params.openid,
        mainSite: config.mainSite
    };
    weixinModel.findOne({ openid: req.params.openid }, function(err, std) {
        if (std) {
            getAll(std.studentId, std.studentPassword, req.params.openid);
            res.render('main', { info: info });
        } else {
            response.redirect(config.mainSite + ":2000/bind/" + request.params.openid);

            console.log("跳转至绑定页面");
        }
    })

});



function getAll(id, password, openid) {
    var startTime = Date.now();
    var gotAll = false;
    superagent
        .post('http://cqyou.top:5000/api/all')
        .send({
            "stdid": id,
            "stdpwd": new Buffer(password).toString('base64'),
            "week": null
        })
        .set('Content-Type', 'application/json')
        .redirects(0)
        .end(function(err, res) {
            if (!gotAll) {
                var studentName = null;
                var totallInfo = null;
                var schedule = null;
                var grade = null;
                var gradeAll = null;

                var array = res.text.split("\n");
                var obj1 = JSON.parse(array[0]);
                var obj2 = JSON.parse(array[1]);
                var obj3 = JSON.parse(array[2]);
                for (var i = 0; i < 3; i++) {
                    var obj = JSON.parse(array[i]);
                    if (obj.stuInfo) {
                        studentName = obj.stuInfo.studentName;
                        schedule = obj.classTable;
                    }
                    if (obj.grade) {
                        grade = obj.grade;
                    }
                    if (obj.gradeAll) {
                        gradeAll = obj.gradeAll;
                        totallInfo = JSON.stringify(obj.totallInfo);
                    }
                }
                studentModel.remove({ openid: openid }, function() {
                    console.log("removed old data of " + id);
                });
                var classTableArray = schedule.split("|");
                var stuDetail = new studentModel({
                    studentId: id,
                    studentPassword: password,
                    openid: openid,
                    studentName: studentName,
                    gradeAll: gradeAll,
                    grade: grade,
                    totallInfo: totallInfo.replace(/"/g, ""),
                    schedule: classTableArray
                });
                stuDetail.save(function() {
                    gotAll = true;
                    var endTime = Date.now();
                    console.log("updated " + id + " info " + " used: " + (endTime - startTime) + " ms");
                })
            }
        });
    superagent
        .post('http://cqyou.top:5000/apiB/all')
        .send({
            "stdid": id,
            "stdpwd": new Buffer(password).toString('base64'),
            "week": null
        })
        .set('Content-Type', 'application/json')
        .redirects(0)
        .end(function(err, res) {
            if (!gotAll) {
                var studentName = null;
                var totallInfo = null;
                var schedule = null;
                var grade = null;
                var gradeAll = null;

                var array = res.text.split("\n");
                var obj1 = JSON.parse(array[0]);
                var obj2 = JSON.parse(array[1]);
                var obj3 = JSON.parse(array[2]);
                for (var i = 0; i < 3; i++) {
                    var obj = JSON.parse(array[i]);
                    if (obj.stuInfo) {
                        studentName = obj.stuInfo.studentName;
                        schedule = obj.classTable;
                    }
                    if (obj.grade) {
                        grade = obj.grade;
                    }
                    if (obj.gradeAll) {
                        gradeAll = obj.gradeAll;
                        totallInfo = JSON.stringify(obj.totallInfo);
                    }
                }
                studentModel.remove({ openid: openid }, function() {
                    console.log("removed old data of " + id);
                });
                var classTableArray = schedule.split("|");
                var stuDetail = new studentModel({
                    studentId: id,
                    studentPassword: password,
                    openid: openid,
                    studentName: studentName,
                    gradeAll: gradeAll,
                    grade: grade,
                    totallInfo: totallInfo.replace(/"/g, ""),
                    schedule: classTableArray
                });
                stuDetail.save(function() {
                    gotAll = true;
                    var endTime = Date.now();
                    console.log("updated " + id + " info " + " used: " + (endTime - startTime) + " ms");
                })
            }

        });
}

module.exports = router;
