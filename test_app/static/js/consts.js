// keyboard layout configurations 
const layoutObj = {
    80: [ 
        [ ["Esc",  1, "Escape"],[null, 1], ["F1",  1],["F2",  1],["F3",  1],["F4",  1],[null, 0.5], ["F5",  1],["F6",  1],["F7",  1],["F8",  1], [null, 0.5], ["F9",  1],["F10",  1],["F11",  1],["F12",  1], ],
        [ ["` ~", 1, "Backquote"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1, "Equal"], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.75, "ShiftRight"] ],
        [ ["Ctrl", 1.25, "ControlLeft"],["Super", 1.25, "MetaLeft"],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],["Super", 1.25, "MetaRight"],["Ctrl", 1.25, "ControlRight"] ],
    ],
    "80-wkl": [ 
        [ ["Esc",  1, "Escape"],[null, 1], ["F1",  1],["F2",  1],["F3",  1],["F4",  1],[null, 0.5], ["F5",  1],["F6",  1],["F7",  1],["F8",  1], [null, 0.5], ["F9",  1],["F10",  1],["F11",  1],["F12",  1], ],
        [ ["` ~", 1, "Backquote"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1, "Equal"], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.75, "ShiftRight"] ],
        [ ["Ctrl", 1.25, "ControlLeft"],[null, 1.25],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],[null, 1.25],["Ctrl", 1.25, "ControlRight"] ],
    ],
    75: [ 
        [ ["Esc",  1, "Escape"],["F1",  1],["F2",  1],["F3",  1],["F4",  1],["F5",  1],["F6",  1],["F7",  1],["F8",  1],["F9",  1],["F10",  1],["F11",  1],["F12",  1],["PrtSc",  1, "PrintScreen"],["ScrLk",  1, "ScrollLock"], ],
        [ ["` ~", 1, "Backquote"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1, "Equal"], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 1.75, "ShiftRight"], [null, 1] ],
        [ ["Ctrl", 1.25, "ControlLeft"],["Super", 1.25, "MetaLeft"],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1, "AltRight"],["Fn", 1],["Ctrl", 1, "ControlRight"],[null, 2], ],
    ],
    "75-wkl": [ 
        [ ["Esc",  1, "Escape"],["F1",  1],["F2",  1],["F3",  1],["F4",  1],["F5",  1],["F6",  1],["F7",  1],["F8",  1],["F9",  1],["F10",  1],["F11",  1],["F12",  1],["PrtSc",  1, "PrintScreen"],["ScrLk",  1, "ScrollLock"], ],
        [ ["` ~", 1, "Backquote"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1, "Equal"], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 1.75, "ShiftRight"], [null, 1] ],
        [ ["Ctrl", 1.25, "ControlLeft"],[null, 1.25],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1, "AltRight"],["Fn", 1],["Ctrl", 1, "ControlRight"],[null, 2], ],
    ],
    65: [
        [ ["Esc", 1, "Escape"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1, "Equal"], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.25, "ShiftRight"], [null, .5] ],
        [ ["Ctrl", 1.25, "ControlLeft"],["Super", 1.25, "MetaLeft"],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],["Ctrl", 1.25, "ControlRight"],["Fn", 1.25], [null, 1.5], ],
    ],
    "65-wkl": [
        [ ["Esc", 1, "Escape"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1, "Equal"], ["Back", 2, "Backspace"], ],
        [ ["Tab", 1.5], ["Q", 1], ["W", 1], ["E", 1], ["R", 1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1], ["P", 1], ["[ {", 1, "BracketLeft"], ["] }", 1, "BracketRight"], ["\\ |", 1.5, "Backslash"], ],
        [ ["Caps", 1.75, "CapsLock"], ["A", 1], ["S", 1], ["D", 1], ["F", 1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1], ["; :", 1, "Semicolon"], ["' \"", 1, "Quote"], ["Enter", 2.25], ],
        [ ["Shift", 2.25, "ShiftLeft"], ["Z", 1], ["X", 1],["C", 1],["V", 1],["B", 1],["N", 1],["M", 1], [", <", 1, "Comma"], [". >", 1, "Period"], ["/ ?", 1, "Slash"], ["Shift", 2.25, "ShiftRight"], [null, .5] ],
        [ ["Ctrl", 1.25, "ControlLeft"],[null, 1.25],["Alt", 1.25, "AltLeft"],["", 7, "Space"],["Alt", 1.25, "AltRight"],["Ctrl", 1.25, "ControlRight"],["Fn", 1.25], [null, 1.5], ],
    ],
    60: [
        [ ["Esc", 1, "Escape"], ["1 !", 1], ["2 @", 1], ["3 #", 1], ["4 $", 1], ["5 %", 1], ["6 ^", 1], ["7 &", 1], ["8 *", 1], ["9 (", 1], ["0 )", 1], ["- _", 1, "Minus"], ["= +", 1, "Equal"], ["Back", 2, "Backspace"], ],
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

// color values for the different color modes
const modeColors = {
    // dark mode
    1: {
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
    // light mode
    2: {
        bg: "#ffffff",
        light: "#eaeaea",
        mid: "lightgrey",
        dark: "rgb(102, 97, 97)",
        brand: "black",
        text: "grey",
        keyLight: "#ffffff",
        keyDark: "#eaeaea",
        keyPressLight: "#e99c9c",
        keyPressDark: "#b87a7a",
    },
}

// irregular keys for keystroke ingestion
const nonAlphaNums = [ 
    "Escape", "Minus", "Equal", "Backslash", "Backquote", "ScrollLock",
    "BracketLeft", "BracketRight", "Backspace", 
    "CapsLock", "Semicolon", "Quote",
    "ShiftLeft", "Comma", "Period", "Slash", "ShiftRight",  
    "Control", "ControlLeft", "Alt", "AltLeft", "Meta", "MetaLeft", "Space", "MetaRight", "AltRight", "ControlRight" 
]