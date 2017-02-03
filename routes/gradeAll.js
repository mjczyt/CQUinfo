var express = require('express');
var router = express.Router();
    /* GET users listing. */
router.get('/:id/:pwd', function(req, res, next) {
    var pwd = new Buffer(req.params.pwd, 'base64').toString();
    var info = {
        id: req.params.id,
        pwd: pwd
    };
    res.render('gradeAll', { info: info });

});




module.exports = router;
