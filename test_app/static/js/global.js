function toggleUserPane() {
    const leaderboardIsHidden = $("section#leaderboard").css("display") === "none";
    if (!leaderboardIsHidden) return;

    const currWidth = $("section#userPane").css("width");
    if (currWidth === "0px") {
        // show user pane
        $("section#userPane").animate({
            "left": "70%", 
            "width": "30%",
        }, 300)
        // fade active form and user page in
        $("div#loginPage form.active").fadeIn(280);
        $("div#userPage").fadeIn(280);
    } else {
        // hide user pane
        $("section#userPane").animate({
            "left": "100%", 
            "width": "0%",
        }, 300);
        // fade active form and user page out
        $("div#loginPage form").fadeOut(280);
        $("div#userPage").fadeOut(280);
    }
}

function toggleLeaderboard() {
    const isHidden = $("section#leaderboard").css("display") === "none";
    if (isHidden) $("section#leaderboard").fadeIn(300);
    else $("section#leaderboard").fadeOut(300);
}

$(document).ready( function() {
    $("section#leaderboard").hide();
    // when nav burger button is clicked, toggle user pane visibility
    $("nav i#leaderboardIcon").click(toggleLeaderboard);
    // when nav burger button is clicked, toggle user pane visibility
    $("nav i#navMenu").click(toggleUserPane);
    // hide test results by default
    $("section#results").hide();
});