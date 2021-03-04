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
    // in user page, when link is clicked, or dropdown is changed update user preferences in DB
    $("div#userPage input[type='radio']:not(:checked)+a").click((e) => changeUserSettings(e));
    $("div#userPage select#layoutPicker").change((e) => changeUserSettings(e));
});