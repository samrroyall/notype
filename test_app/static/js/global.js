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

function toggleLeaderboard(seconds = 300) {
    const isHidden = $("section#leaderboard").css("display") === "none";
    if (isHidden) {
        $("section#words div#startTestPrompt").hide();
        $("section#leaderboard").fadeIn(seconds);
    } else {
        $("section#leaderboard").fadeOut(seconds);
        $("section#words div#startTestPrompt").fadeIn(seconds);
    }
}

$(document).ready( function() {
    $("section#leaderboard").hide();
    // when nav burger button is clicked, toggle user pane visibility
    $("nav i#leaderboardIcon").click(toggleLeaderboard);
    // when leaderboard 'X' button is clicked, toggle leaderboard
    $("div#leaderboardHeader i.bi").click( () => toggleLeaderboard(0) );
    // when nav burger button is clicked, toggle user pane visibility
    $("nav i#navMenu").click(toggleUserPane);
    // hide test results by default
    $("section#results").hide();
});