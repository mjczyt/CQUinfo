var express = require('express');
var router = express.Router();
var config = require('.././config')

var model = require("./weixinModel");
var studentModel = require("./studentModel");


/* GET users listing. */
router.get('/:openid', function(req, res, next) {
    var info = {
        openid: req.params.openid,
        mainSite: config.mainSite
    };
    model.findOne({ openid: req.params.openid }, function(err, std) {
        if (std) {
            studentModel.findOne({ openid: req.params.openid }, function(error, studentInfo) {
                res.render('gradeAll', { info: info, gradeAll: studentInfo.gradeAll, totallInfo: studentInfo.totallInfo });
            })

        } else {
            console.log("跳转至绑定页面");
        }
    })
});


module.exports = router;
