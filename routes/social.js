var express = require('express');
var router = express.Router();
    /* GET users listing. */
router.get('/:id/:pwd', function(req, res, next) {
    var info = {
        id: req.params.id,
        pwd: req.params.pwd
    };
    res.render('social', { info: info });
});




module.exports = router;
