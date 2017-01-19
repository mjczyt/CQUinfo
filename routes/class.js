var express = require('express');
var router = express.Router();
var test = {
    "stuInfo": {
        "studentName": "孟佳程",
        "studentId": "20142794"
    },
    "classTable": [
        "周一:单片机原理及应用[7-8节]A5202",
        "周二:固体图像传感器技术[1-2节]A5211",
        "周二:信息光学[5-6节]A5211",
        "周二:计算机视觉技术[9-10节]A5202",
        "周三:单片机原理及应用[1-2节]A5202",
        "周三:可编程逻辑电路技术[5-6节]A5211",
        "周四:信息光学[1-2节]A5202",
        "周四:固体图像传感器技术[3-4节]A5211",
        "周五:计算机视觉技术[1-2节]A5202"
    ],
    "used-time": 2037
};
/* GET users listing. */
router.get('/', function(req, res, next) {
    var table = {};
    for (let i = 1; i < 8; i++) {
        var data = '';
        switch (i) {
            case 1:
                data = "Mon";
                break;
            case 2:
                data = "Tues";
                break;
            case 3:
                data = "Wed";
                break;
            case 4:
                data = "Thur";
                break;
            case 5:
                data = "Fri";
                break;
            case 6:
                data = "Sat";
                break;
            case 7:
                data = "Sun";
                break;
        }
        for (let j = 1; j < 13; j++) {
        	var content=data+j;
        	table[content]="test";
        }
    }
    res.render('class',{table:table});
});

module.exports = router;
