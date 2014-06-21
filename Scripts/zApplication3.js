
$(function () {
    // Proxy created on the fly
    var chat1 = $.connection.hubChat1;
    var chat2 = $.connection.hubChat2;

    // Declare a function on hub so the server can invoke it
    chat1.addMessage1 = function (message) {
        $('#messages1').append('<li>' + message + '</li>');
    };

    // Declare a function on hub so the server can invoke it
    chat2.addMessage2 = function (message) {
        $('#messages2').append('<li>' + message + '</li>');
    };

    // Call the chat method on the server
    $("#broadcast1").click(function () {
        chat1.send1($('#msg').val());
    });

    // Call the chat method on the server
    $("#broadcast2").click(function () {
        chat2.send2($('#msg').val());
    });

    // Start the connection
    $.connection.hub.start();
});
