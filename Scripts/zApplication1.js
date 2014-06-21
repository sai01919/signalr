
$(function () {
    //debugger;
    // Proxy created on the fly
    var chat = $.connection.hubChat1;

    chat.addMessage1 = function (message) {
        $('#messages').append('<li>' + message + '</li>');
    };

    $("#broadcast").click(function () {
        chat.send($('#msg').val());
    });

    $.connection.hub.start();
});
