var express = require('express');
var router = express.Router();
var config = require('.././config')
var model = require("./weixinModel");
    /* GET users listing. */
router.get('/:openid', function(req, res, next) {
    var info = {
        mainSite:config.mainSite
    };
    model.findOne({openid:req.params.openid},function(err,std){
    	if(std){
    		console.log(std.studentId);
    		 res.render('main', { info: info });
    	}else{
    		console.log("跳转至绑定页面");
    	}
    })
   
});




module.exports = router;
