var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/:id/:pwd', function(req, res, next) {
    var info = {
        id: req.params.id,
        pwd: req.params.pwd
    };
    res.render('grade', { info: info, grade:str.grade });

});

var str={"grade":["通信原理（双语） : 71.00","算法分析与设计 : 0","物联网与社会生活 : 中等","物理光学 : 60.00","数字信号处理（Ⅱ） : 64.00","工程光学实验 : 良好","测控电路 : 78.00","半导体物理 : 84.00","激光原理 : 69.00","光学系统设计及CAD : 79.00","光电器件 : 63.00"],"used-time":1212}

module.exports = router;
