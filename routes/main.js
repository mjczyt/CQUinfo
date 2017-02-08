var express = require('express');
var router = express.Router();
var config = require('.././config')

    /* GET users listing. */
router.get('/:id/:pwd', function(req, res, next) {
    var info = {
        id: req.params.id,
        pwd: req.params.pwd,
        mainSite:config.mainSite
    };
    res.render('main', { info: info });
});




module.exports = router;
