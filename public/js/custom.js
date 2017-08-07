$(document).ready(function() {
    $("#sendPush").click(function() {
        var url = window.location.href + '/';
        var key = "AAAAalLjbyM:APA91bE9ZeLmlJ6i5DaTo6-12q_7YM1eT2HYQAl4XbpAmGchFkBmLEvarNkM9Jmcdk-kaZeCqEW-tVfGqK7OGTuJJdKyfsNgGGdPrgCJlwPVLG4BW21vGN527VBMq9yJntlGZCV5YvXu";
        var to = 'cisKTNAQ1Zk:APA91bE2tRQ7z1ClY27fbrkEdYnaN7T-OW6vfCkJd2zhdRM3GoKxMqAtGLqzCOAIWHAFo6DSDeL-m-jwYKCo2KmlhYipiKHY-pdo8xMYDmhh9qnJKmDf6JN590GAJ6ONUFtQ29yW96o6';
        var title = $("#title").val();
        var body = $("#body").val();
        $.post("sendPush", { key: key, to: to, title: title, body: body })
            .done(function(data) {
                console.log(data);
            });
    });
});