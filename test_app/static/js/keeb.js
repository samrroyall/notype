function setLayout(layout) {
    // if `layout` is not a key of layoutObj, throw erro 
    if (!layoutObj.hasOwnProperty(layout)) {
        throw `Invalid keeb layout '${layout}' passed to setLayout() function`;
    }
    // loop through keyboard rows and their keys and add to the #keeb section
    let layoutString = "";
    for (let row of layoutObj[layout]) {
        layoutString += "<div class='keebRow'>";
        for (let key of row) {
            // check key list length
            if (key.length !== 2 && key.length !== 3) {
                throw `Key '${key}' does not have length 2 or 3`;
            }
            let keySize = key[1];               
            // add emptySpace div
            if (key[0] === null) {
                layoutString += `<div class='emptySpace' style='width: calc(100% * ${keySize} / 15);'></div>`;
                continue;
            }
            let splitString = key[0].split(" ")
            // add keebKey div with dynamic ID and Size
            if (key.length == 3) {
                layoutString += `<div class='keebKey' id="key${key[2]}" style='width: calc(100% * ${keySize} / 15);'>`;
            } else {
                layoutString += `<div class='keebKey' id="key${splitString[0]}" style='width: calc(100% * ${keySize} / 15);'>`;
            }
            // create legend divs for keys containing one or two characters
            let numChars = splitString.length;
            if (numChars === 2 || numChars === 3) {
                layoutString += `<div class='twoChars'>
                <div class='shift'>${splitString[1]}</div>
                <div class='main'>${splitString[0]}</div>
                </div>`;
            } else {
                layoutString += `<div class='oneChar'>${key[0]}</div>`
            }
            layoutString += "</div>";
        }
        layoutString += "</div>";
    }
    $("main section#keeb").append(layoutString);
}

function changeMode(mode) {
    if ($(":root")[0].style.hasOwnProperty("--mode")) {
        let currMode = $(":root")[0].style.getPropertyValue("--mode");
        if (currMode === mode) return;
    }
    if (!modeColors.hasOwnProperty(mode)) {
        console.log(`mode ${mode} does not exist`)
        return;
    }
    $(":root")[0].style.setProperty("--mode", mode);
    $(":root")[0].style.setProperty("--bg-color", modeColors[mode].bg);
    $(":root")[0].style.setProperty("--light-color", modeColors[mode].light);
    $(":root")[0].style.setProperty("--mid-color", modeColors[mode].mid);
    $(":root")[0].style.setProperty("--dark-color", modeColors[mode].dark);
    $(":root")[0].style.setProperty("--brand-color", modeColors[mode].brand);
    $(":root")[0].style.setProperty("--text-color", modeColors[mode].text);
    $(":root")[0].style.setProperty("--keyLight-color", modeColors[mode].keyLight);
    $(":root")[0].style.setProperty("--keyDark-color", modeColors[mode].keyDark);
    $(":root")[0].style.setProperty("--keyPressLight-color", modeColors[mode].keyPressLight);
    $(":root")[0].style.setProperty("--keyPressDark-color", modeColors[mode].keyPressDark);

    // reset keeb colors 
    $(".keebKey").css("background-color", modeColors[mode].keyDark);
    $(".oneChar").css("background-color", modeColors[mode].keyLight)
    $(".oneChar").css("color", modeColors[mode].text)
    $(".twoChars").css("background-color", modeColors[mode].keyLight)
    $(".twoChars").css("color", modeColors[mode].text)
}


function getKeyID(e) {
    let keyID;
    if (nonAlphaNums.find( elem => elem === e.code.toString()) !== undefined) {
        keyID = `#key${e.code}`;
    } else {
        let keyStr = e.key.toString();
        keyID = `#key${keyStr[0].toUpperCase()}${keyStr.substring(1)}`;
    }
    return keyID;
}

function pressKey(e) {
    let keyID = getKeyID(e);
    let keyPressLight = $(":root")[0].style.getPropertyValue("--keyPressLight-color");
    let keyPressDark = $(":root")[0].style.getPropertyValue("--keyPressDark-color");
    $(`${keyID} .oneChar, ${keyID} .twoChars`).css("background-color", keyPressLight);
    $(`${keyID} .oneChar, ${keyID} .twoChars`).css("color", "#ffffff");
    $(keyID).css("background-color", keyPressDark);
}

function unPressKey(e) {
    let keyID = getKeyID(e);
    let keyLight = $(":root")[0].style.getPropertyValue("--keyLight-color");
    let keyDark = $(":root")[0].style.getPropertyValue("--keyDark-color");
    let textColor = $(":root")[0].style.getPropertyValue("--text-color");
    $(`${keyID} .oneChar, ${keyID} .twoChars`).css("background-color", keyLight);
    $(`${keyID} .oneChar, ${keyID} .twoChars`).css("color", textColor);
    $(keyID).css("background-color", keyDark);
}

function startKeyTracking() {
    $(document).keydown( function (e) {
        const userPaneOpen = $("section#userPane").css("width") !== "0px";
        try {
            if (userPaneOpen) return;
            pressKey(e);
        } catch (err) {
            return;
        }
    });
    $(document).keyup( function (e) {
        const userPaneOpen = $("section#userPane").css("width") !== "0px";
        try {
            if (userPaneOpen) return;
            unPressKey(e);
        } catch (err) {
            return;
        }
    });
}

$(document).ready( function () {
    // set keeb layout and color mode based on session vars
    setLayout($("section#keeb input#currentLayout").val());
    changeMode($("section#keeb input#currentMode").val());
    startKeyTracking();
});