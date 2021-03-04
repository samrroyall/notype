function toggleUserPane() {
    const currWidth = $("section#userPane").css("width");
    if (currWidth === "0px") {
        // show user pane
        $("section#userPane").animate({
            "left": "70%", 
            "width": "30%",
        }, 300);
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

function toggleLoginRegister(e) {
    // do nothing when active picker is clicked
    if (e.currentTarget.classList.contains("active")) return;

    // active Picker
    $("div#loginRegistrationPicker span.active").first().removeClass("active");
    // active Login/Registration Form
    $("section#userPane form.active").first().removeClass("active").hide();
    // inactive Picker
    $("div#loginRegistrationPicker span:not(.active)").first().addClass("active");
    // inactive Login/Registration Form
    $("section#userPane form:not(.active)").first().addClass("active").show();
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function AJAXPostForm(e) {
    e.preventDefault();
    const form_id = e.currentTarget.id;
    const self = $(`section#userPane form#${form_id}`);
    const token = self.children("input[name='csrfmiddlewaretoken']").val();
    const short_name = form_id.substring(0,form_id.length-4);
    $.ajax({
            beforeSend: function(xhr, settings) {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", token);
                }
            },
            method: `${self.attr('method')}`,
            url: `/${short_name}`,
            data: $(self).serialize(),
            dataType: 'json',
            success: function (e) {
                // add flash errors to form
                if (e.hasOwnProperty("errors")) {
                    let errors = "";
                    for (let err of e.errors) {
                        errors += `<li>${err}</li>\n`;
                    }
                    self.children(`div#${short_name}Errors`).first().html(`<ul>${errors}</ul>`);
                // reload page 
                } else {
                    location.reload();
                }
            },
            error: function (e) {
                console.log(e);
                alert("The previous request resulted in an error.");
            },
    });
}

function changeUserSettings(e) {
    e.preventDefault();
    let name, value;
    if (e.currentTarget.tagName == "A") {
        const target = $(`div#userPage #${e.currentTarget.id}`).prevAll("input").first();
        name = target.attr("name");
        value = target.val();
    } else if (e.currentTarget.tagName == "SELECT") {
        const target = $(`div#userPage #${e.currentTarget.id}`);
        name = target.attr("name");
        value = target.val();
    } else {
        return;
    }
    const token = $("section#userPane div#userPage input[name='csrfmiddlewaretoken']").first().val();
    $.ajax({
            beforeSend: function(xhr, settings) {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", token);
                }
            },
            method: "POST",
            url: "/change_user_settings",
            data: {"name": name, "value": value},
            dataType: 'json',
            success: function (e) {
                location.reload();
            },
            error: function (e) {
                console.log(e);
                alert("The previous request resulted in an error.");
                return;
            },
    });
}

$(document).ready( function () {
    // when nav burger button is clicked, toggle user pane visibility
    $("nav i#navMenu").click(toggleUserPane);
    // when login/registration picker is clicked change form
    $("div#loginRegistrationPicker span").click((e) => toggleLoginRegister(e));
    // make AJAX POST Request when login and register forms are submitted
    $("div#loginPage form").submit( (e) => AJAXPostForm(e) );
    // in user page, when link is clicked, or dropdown is changed update user preferences in DB
    $("div#userPage input[type='radio']:not(:checked)+a").click((e) => changeUserSettings(e));
    $("div#userPage select#layoutPicker").change((e) => changeUserSettings(e));
    // by default, hide user Pane and its contents
    $("div#loginPage form").hide();
    $("div#loginPage div#userPage").hide();
    // by default, login form and picker are active
    $("div#loginRegistrationPicker span#loginPicker").addClass("active");
    $("div#loginPage form#loginForm").addClass("active");
});