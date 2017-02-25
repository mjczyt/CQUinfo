var express = require('express');
var router = express.Router();
var config = require('.././config')
var model = require("./weixinModel");
var studentModel = require("./studentModel");
var superagent = require("superagent");


/* GET users listing. */
router.get('/:openid', function(req, res, next) {
    var info = {
        openid: req.params.openid,
        mainSite: config.mainSite
    };

    res.render('bind', { info: info });

});

router.post('/:openid', function(request, response, next) {
    var info = {
        openid: request.params.openid,
        mainSite: config.mainSite
    };
    console.log("bind" + request.body.id + " " + request.body.password);
    var replied = false;
    superagent
        .post('http://cqyou.top:5000/api/grade')
        .send({
            "stdid": request.body.id,
            "stdpwd": new Buffer(request.body.password).toString('base64')
        })
        .set('Content-Type', 'application/json')
        .redirects(0)
        .accept('application/json')
        .end(function(err, res) {
            if ((err || !res.ok) && replied == false) {
                console.log(err);
            } else {
                var pattern = /(wrong)/;
                if (pattern.exec(res.text) == null) {
                    res.send('<p>绑定成功</p>');
                } else {
                    res.send('<p>账号密码有误</p>');
                }
            }
        });


    superagent
        .post('http://cqyou.top:5000/apiB/grade')
        .send({
            "stdid": request.body.id,
            "stdpwd": new Buffer(request.body.password).toString('base64')
        })
        .set('Content-Type', 'application/json')
        .redirects(0)
        .accept('application/json')
        .end(function(err, res) {
            if ((err || !res.ok) && replied == false) {
                console.log(err);
            } else {
                var pattern = /(wrong)/;
                if (pattern.exec(res.text) == null) {
                    res.send('<p>绑定成功</p>');
                } else {
                    res.send('<p>账号密码有误</p>');
                }
            }
        });



});


module.exports = router;
