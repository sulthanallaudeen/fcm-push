$(document).ready(function() {
    $("#sendPush").click(function() {
        var url = window.location.href + '/';
        var key = $("#key").val();
        var to = $("#fcm_token").val();
        var title = $("#title").val();
        var body = $("#body").val();
        $.post("sendPush", { key: key, to: to, title: title, body: body })
            .done(function(data) {
                console.log(data);
            });
    });
});