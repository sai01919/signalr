
$(function () {
    // Proxy created on the fly
    var messagebox = $.connection.hubMessage;

    // Declare a function on hub so the server can invoke it
    messagebox.showMessage = function (data) {
        $('#messagebox').text(data)
    };

    // Start the connection
    $.connection.hub.start();
});
