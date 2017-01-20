var express = require('express');
var router = express.Router();
var webshot = require("../public/javascripts/webshot")
    /* GET users listing. */
router.get('/:id/:pwd', function(req, res, next) {
    var pwd = new Buffer(req.params.pwd, 'base64').toString()
    var info = {
        id: req.params.id,
        pwd: pwd
    };
    res.render('class', { info: info });
});

router.post('/photo', function(req, res, next) {
    webshot(req.body.url, './public/webshot/'+req.body.id+'.jpg', function(err) {
        if (err) return console.log(err);
        res.end("ok");
        console.log('OK');
    });
})


module.exports = router;
