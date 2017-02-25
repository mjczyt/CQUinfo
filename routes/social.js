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
                res.render('social', { info: info });
            })

        } else {
            console.log("跳转至绑定页面");
        }
    })
});

router.get('/street/:openid', function(req, res, next) {
    var info = {
        openid: req.params.openid,
        mainSite: config.mainSite
    };
    model.findOne({ openid: req.params.openid }, function(err, std) {
        if (std) {
            studentModel.findOne({ openid: req.params.openid }, function(error, studentInfo) {
                res.render('street', { info: info });
            })

        } else {
            console.log("跳转至绑定页面");
        }
    })
});
router.get('/message/:openid', function(req, res, next) {
    var info = {
        openid: req.params.openid,
        mainSite: config.mainSite
    };
    model.findOne({ openid: req.params.openid }, function(err, std) {
        if (std) {
            studentModel.findOne({ openid: req.params.openid }, function(error, studentInfo) {
                res.render('message', { info: info });
            })

        } else {
            console.log("跳转至绑定页面");
        }
    })
});
router.get('/chat/:openid', function(req, res, next) {
    var info = {
        openid: req.params.openid,
        mainSite: config.mainSite
    };
    model.findOne({ openid: req.params.openid }, function(err, std) {
        if (std) {
            studentModel.findOne({ openid: req.params.openid }, function(error, studentInfo) {
                res.render('chat', { info: info });
            })

        } else {
            console.log("跳转至绑定页面");
        }
    })
});

module.exports = router;
