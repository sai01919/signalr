
$(function () {
    var connection = $.connection('/echo');

    connection.received(function (data) {
        $('#messages').append('<li>' + data + '</li>');
    });    

    $("#broadcast").click(function () {
        connection.send($('#msg').val());
    });

    connection.start();
});
