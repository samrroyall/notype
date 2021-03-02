function toggleUserPane() {
    const currWidth = $("section#userPane").css("width");
    if (currWidth === "0px") {
        $("section#userPane").animate({
            "left": "70%", 
            "width": "30%",
        }, 300);
        $("section#userPane form.active").fadeIn(280);
    } else {
        $("section#userPane").animate({
            "left": "100%", 
            "width": "0%",
        }, 300);
        $("section#userPane form").fadeOut(280);
    }
}

function toggleLoginRegister(e) {
    if (e.currentTarget.classList.contains("active")) return;
    const activePicker = $("div#loginRegistrationPicker span.active").first();
    const activeForm = $("section#userPane form.active").first();
    const inactivePicker = $("div#loginRegistrationPicker span:not(.active)").first();
    const inactiveForm = $("section#userPane form:not(.active)").first();
    activePicker.removeClass("active");
    activeForm.removeClass("active");
    inactivePicker.addClass("active");
    inactiveForm.addClass("active");
    activeForm.hide();
    inactiveForm.show();
}

$(document).ready( function () {
    $("section#userPane form").hide();
    // set login to default for user pane
    $("div#loginRegistrationPicker span#loginPicker").addClass("active");
    $("section#userPane form#loginForm").addClass("active");
    // when nav burger button is clicked, toggle
    // user pane visibility
    $("nav i#navMenu").click(toggleUserPane);
    // when login/registration picker is clicked 
    // change form
    $("div#loginRegistrationPicker span").click((e) => toggleLoginRegister(e));
});