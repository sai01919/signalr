
$(function () {
    // Proxy created on the fly
    var progress = $.connection.hubProgress;

    // Reset the progress bar
    $("#progressbar").progressbar();

    // Declare a function on the hub so the server can invoke it
    progress.updateProgress1 = function (data) {
        $("#progressbar").progressbar({
            value: data
        });
    };

    // Declare a function on the hub so the server can invoke it
    progress.updateProgress2 = function (data) {
        $("#progressbar").progressbar({
            value: data
        });
    };

    // Call the chat method on the server
    $("#startprogress2").click(function () {
        progress.startProgress();
    });

    // Start the connection
    $.connection.hub.start();
});
