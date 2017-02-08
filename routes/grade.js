var express = require('express');
var router = express.Router();
var config = require('.././config')

/* GET users listing. */
router.get('/:id/:pwd', function(req, res, next) {
    var info = {
        id: req.params.id,
        pwd: req.params.pwd,
        mainSite: config.mainSite
    };
    res.render('grade', { info: info, grade: str.grade });

});

var str = { "grade": ["毛泽东思想和中国特色社会主义理论体系概论 : 78.00", "形势与政策（3 : 95.00", "线性代数 : 77.00", "大学物理Ⅱ : 66.00", "陈述与沟通 : 81.00", "大学生心理健康与成长 : 良好", "电子实习（Ⅱ） : 良好", "工程测量实习 : 优秀", "毛泽东思想和中国特色社会主义理论体系概论实践 : 未录入", "理论力学（Ⅲ : 88.00", "电工学原理（Ⅱ） : 84.00", "工程测量（I : 80.00", "体育自选项目 : 未录入"], "used-time": 1225 }


module.exports = router;
