
$(function () {
    // Proxy created on the fly
    var chat = $.connection.hubChat2;

    // Declare a function on hub so the server can invoke it
    chat.addMessage2 = function (message) {
        $('#messages').append('<li>' + message + '</li>');
    };

    // Call the chat method on the server
    $("#broadcast").click(function () {
        chat.send2($('#msg').val());
    });

    // Start the connection
    $.connection.hub.start();
});
