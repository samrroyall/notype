const layoutObj = {
    80: [ 
        [ ["Esc",  1, "Escape"],[null, 1], ["F1",  1],["F2",  1],["F3",  1],["F4",  1],[null, 0.5], ["F5",  1],["F6",  1],["F7",  1],["F8",  1], [null, 0.5], ["F9",  1],["F10",  1],["F11",  1],["F12",  1], ],
        [ ["` ~", 1, "Backquote"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.75, "ShiftRight"] ],
        [ ["Ctrl", 1.25, "ControlLeft"],["Super", 1.25, "MetaLeft"],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],["Super", 1.25, "MetaRight"],["Ctrl", 1.25, "ControlRight"] ],
    ],
    "80-wkl": [ 
        [ ["Esc",  1, "Escape"],[null, 1], ["F1",  1],["F2",  1],["F3",  1],["F4",  1],[null, 0.5], ["F5",  1],["F6",  1],["F7",  1],["F8",  1], [null, 0.5], ["F9",  1],["F10",  1],["F11",  1],["F12",  1], ],
        [ ["` ~", 1, "Backquote"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.75, "ShiftRight"] ],
        [ ["Ctrl", 1.25, "ControlLeft"],[null, 1.25],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],[null, 1.25],["Ctrl", 1.25, "ControlRight"] ],
    ],
    75: [ 
        [ ["Esc",  1, "Escape"],["F1",  1],["F2",  1],["F3",  1],["F4",  1],["F5",  1],["F6",  1],["F7",  1],["F8",  1],["F9",  1],["F10",  1],["F11",  1],["F12",  1],["PrtSc",  1, "PrintScreen"],["ScrLk",  1, "ScrollLock"], ],
        [ ["` ~", 1, "Backquote"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 1.75, "ShiftRight"], [null, 1] ],
        [ ["Ctrl", 1.25, "ControlLeft"],["Super", 1.25, "MetaLeft"],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1, "AltRight"],["Fn", 1],["Ctrl", 1, "ControlRight"],[null, 2], ],
    ],
    "75-wkl": [ 
        [ ["Esc",  1, "Escape"],["F1",  1],["F2",  1],["F3",  1],["F4",  1],["F5",  1],["F6",  1],["F7",  1],["F8",  1],["F9",  1],["F10",  1],["F11",  1],["F12",  1],["PrtSc",  1, "PrintScreen"],["ScrLk",  1, "ScrollLock"], ],
        [ ["` ~", 1, "Backquote"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 1.75, "ShiftRight"], [null, 1] ],
        [ ["Ctrl", 1.25, "ControlLeft"],[null, 1.25],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1, "AltRight"],["Fn", 1],["Ctrl", 1, "ControlRight"],[null, 2], ],
    ],
    65: [
        [ ["Esc", 1, "Escape"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.25, "ShiftRight"], [null, .5] ],
        [ ["Ctrl", 1.25, "ControlLeft"],["Super", 1.25, "MetaLeft"],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],["Ctrl", 1.25, "ControlRight"],["Fn", 1.25], [null, 1.5], ],
    ],
    "65-wkl": [
        [ ["Esc", 1, "Escape"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.25, "ShiftRight"], [null, .5] ],
        [ ["Ctrl", 1.25, "ControlLeft"],[null, 1.25],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],["Ctrl", 1.25, "ControlRight"],["Fn", 1.25], [null, 1.5], ],
    ],
    60: [
        [ ["Esc", 1, "Escape"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.75, "ShiftRight"], ],
        [ ["Ctrl", 1.25, "ControlLeft"],["Super", 1.25, "MetaLeft"],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],["Super", 1.25, "MetaRight"],["Ctrl", 1.25, "ControlRight"],["Fn", 1.25], ],
    ],
    "60-wkl": [
        [ ["Esc", 1, "Escape"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.75, "ShiftRight"], ],
        [ ["Ctrl", 1.25, "ControlLeft"],[null, 1.25],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],[null, 1.25],["Ctrl", 1.25, "ControlRight"],["Fn", 1.25], ],
    ],
    "60-hhkb": [ 
        [ ["Esc",  1, "Escape"], ["1 !",  1],["2 @",  1], ["3 #",  1], ["4 $",  1], ["5 %",  1], ["6 ^",  1], ["7 &",  1], ["8 *",  1], ["9 (",  1], ["0 )",  1], ["- _",  1, "Minus"], ["= +",  1, "Equal"], ["\\ |", 1, "Backslash"], ["` ~",  1, "Backquote"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["Back", 1.5, "Backspace"], ],
        [ ["Control", 1.75, "ControlLeft"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ], 
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1], ["C", 1], ["V", 1], ["B", 1], ["N", 1], ["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 1.75, "ShiftRight"], ["Fn", 1], ],
        [ ["Alt", 1, "AltLeft"], ["Super", 1.25, "MetaLeft"], ["", 7, "Space"], ["Super", 1.25, "MetaRight"], ["Alt", 1, "AltRight"], ],
    ],
};

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

const modeColors = {
    light: {
        bg: "#ffffff",
        light: "#eaeaea",
        mid: "lightgrey",
        dark: "grey",
        brand: "black",
        text: "grey",
        keyLight: "#ffffff",
        keyDark: "#eaeaea",
        keyPressLight: "#e99c9c",
        keyPressDark: "#b87a7a",
    },
    dark: {
        bg: "rgb(41, 38, 38)",
        light: "grey",
        mid: "#eaeaea",
        dark: "lightgrey",
        brand: "#ffffff",
        text: "lightgrey",
        keyLight: "rgb(88, 88, 88)",
        keyDark: "rgb(77, 77, 77)",
        keyPressLight: "#854f4f",
        keyPressDark: "#5a3636",
    },
}

function changeMode(mode) {
    if ($(":root")[0].style.hasOwnProperty("--mode")) {
        let currMode = $(":root")[0].style.getPropertyValue("--mode");
        if (currMode === mode) return;
    }
    if (!modeColors.hasOwnProperty(mode)) return;
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

const nonAlphaNums = [ 
    "Escape", "Minus", "Equal", "Backslash", "Backquote", "ScrollLock",
    "BracketLeft", "BracketRight", "Backspace", 
    "CapsLock", "Semicolon", "Quote",
    "ShiftLeft", "Comma", "Period", "Slash", "ShiftRight",  
    "Control", "ControlLeft", "Alt", "AltLeft", "Meta", "MetaLeft", "Space", "MetaRight", "AltRight", "ControlRight" 
]

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

$(document).ready( function () {
    $("#layoutPicker").change( function () {
        $("#layoutForm").submit();
    });
    // $("#layoutPicker").change( function () {
    //     // clear layout and then set
    //     $("main section#keeb").html("");
    //     setLayout($(this).val());
    // });

    $("#modePicker").change( function () {
        $("#modeForm").submit();
    });
    // $("#modePicker").change( function () {
    //     changeMode($(this).val());
    // });

    $(document).keydown( (e) => pressKey(e) );
    $(document).keyup( (e) => unPressKey(e) );

});