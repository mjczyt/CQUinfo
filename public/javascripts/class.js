$(function() {
    var id = $("#id").text();
    var pwd = $("#pwd").text();
    $.post('http://cqyou.top:5000/api/schedule', { "stdid": id, "stdpwd": pwd, "week": "1" },
        getData,
        'json'
    );

    function getData(data) {
        data.classTable.forEach(function(element, index) {
            var day = element.substring(1, 2);
            switch (day) {
                case "一":
                    changeTable(1, element);
                    break;
                case "二":
                    changeTable(2, element);
                    break;
                case "三":
                    changeTable(3, element);
                    break;
                case "四":
                    changeTable(4, element);
                    break;
                case "五":
                    changeTable(5, element);
                    break;
                case "六":
                    changeTable(6, element);
                    break;
                case "日":
                    changeTable(7, element);
                    break;
            }
        });
    };

    //根据课程信息及时间信息对表格做出改变
    function changeTable(week, classInfo) {
        var pattern = /:([\u4e00-\u9fa5]*).*\[(\d*)-(\d*)节\](.*)/;
        //匹配后得到info[1]是课程名 [2]是起始节数 [3]结束节数 [4]教室
        var info = pattern.exec(classInfo);
        // console.log(classInfo);
        info[2] -= 1;
        info[3] -= 1;
        if (info[3] - info[2] == 1) {
            var filter = 'tbody>tr:eq(' + info[2] + ')>td:eq(' + week + ')';
            var nextFilter = 'tbody>tr:eq(' + info[3] + ')>td:eq(' + 1 + ')';
            $(nextFilter).remove();
            $(filter).attr("rowSpan", "2").text(info[1] + "@" + info[4]);
        }


    }


})
