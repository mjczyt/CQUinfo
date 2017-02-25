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

    res.render('bind', { info: info });

});

router.post('/:openid', function(req, res, next) {
    var info = {
        openid: req.params.openid,
        mainSite: config.mainSite
    };

    console.log(req.query.id);
    console.log(req.query.password);



});


module.exports = router;
