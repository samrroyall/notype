function toggleLoginRegister(e) {
    // do nothing when active picker is clicked
    if (e.currentTarget.classList.contains("active")) return;

    // ensure password reset form is hidden
    $("div#loginPage form#resetForm").hide();

    const activePicker = $("div#loginRegistrationPicker span.active").first();
    const inactivePicker = $("div#loginRegistrationPicker span:not(.active)").first();
    // active Picker
    activePicker.removeClass("active");
    // inactive Picker
    inactivePicker.addClass("active");

    const activeForm = $("section#userPane form.active").first();
    const inactiveForm = $("section#userPane form:not(.active)").first();
    // active Login/Registration Form
    activeForm.removeClass("active").hide();
    // inactive Login/Registration Form
    inactiveForm.addClass("active").show();
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
                } else if (e.hasOwnProperty("successMessage")) {
                    self.children(`div#${short_name}Errors`).first().html(`<ul style="color: green">${e.successMessage}</ul>`);
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

$(document).ready( function() {
    // when login/registration picker is clicked change form
    $("div#loginRegistrationPicker span").click((e) => toggleLoginRegister(e));
    // make AJAX POST Request when login and register forms are submitted
    $("div#loginPage form").submit( e => AJAXPostForm(e) );
    // by default, hide user Pane and its contents
    $("div#loginPage form").hide();
    $("div#loginPage div#userPage").hide();
    // by default, login form and picker are active
    $("div#loginRegistrationPicker span#loginPicker").addClass("active");
    $("div#loginPage form#loginForm").addClass("active");
    // when password reset link is clicked, show password reset form
    $("div#loginPage a#passwordResetLink").click( e => {
        e.preventDefault();
        $("div#loginPage form#loginForm").hide();
        $("div#loginPage form#resetForm").show();
    })
});



