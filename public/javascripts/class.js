$(function() {

    var schedule = $("#schedule").text();
    schedule = schedule.substring(3);
    getData(schedule);

    function getData(data) {
        data = data.split(",");
        data.forEach(function(element, index) {
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
        if (info[3] - info[2] == 2) {
            var filter = 'tbody>tr:eq(' + info[2] + ')>td:eq(' + week + ')';
            var nextFilter1 = 'tbody>tr:eq(' + info[3] + ')>td:eq(' + 1 + ')';
            var nextFilter2 = 'tbody>tr:eq(' + info[3] + ')>td:eq(' + 2 + ')';
            $(nextFilter1).remove();
            $(nextFilter2).remove();
            $(filter).attr("rowSpan", "3").text(info[1] + "@" + info[4]);
        }
        if (info[3] - info[2] == 3) {
            var filter = 'tbody>tr:eq(' + info[2] + ')>td:eq(' + week + ')';
            var nextFilter1 = 'tbody>tr:eq(' + info[3] + ')>td:eq(' + 1 + ')';
            var nextFilter2 = 'tbody>tr:eq(' + info[3] + ')>td:eq(' + 2 + ')';
            var nextFilter3 = 'tbody>tr:eq(' + info[3] + ')>td:eq(' + 3 + ')';
            $(nextFilter1).remove();
            $(nextFilter2).remove();
            $(nextFilter3).remove();
            $(filter).attr("rowSpan", "2").text(info[1] + "@" + info[4]);
        }
    }
})
