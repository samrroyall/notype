$(document).ready( function () {
    $("div#leaderboardScreen button").click( function () {
        if ($(this).first().hasClass("active")) {
            $(this).first().removeClass("active");
        } else {
            $(this).first().addClass("active");
        }
    });
});