function setupTest() {
    // hide test prompt
    $("section#words div#startTestPrompt").hide();
    // increase test opacity to 100% 
    $("section#words div#wordWrapper").css("opacity", "1");
    // ease-in timer and counter 
    $("section#timerAndCounter").animate(
        {"width": "15%"}, 500
    );
    $("section#test").css("justify-content", "space-evenly");
    $("section#timerAndCounter section#counter").css("display", "flex");
    $("section#timerAndCounter section#timer").css("display", "flex");

    // instantiate new test with user test duration
    let test = new NoTypeTest(
        test_length = parseInt($("section#test input#testLength").val())
    );

    // handle user pane conflicting with test
    const currWidth = $("section#userPane").css("width");
    if (currWidth !== "0px") toggleUserPane();
    // end any tests currently running if user pane is opened
    $("nav i#navMenu").click((e) => (
        ($("section#test input#testState").val() == "started")
        ? test.endTest(false)
        : {}
    ));

    // open keyup listener, send all keystrokes to handler
    $(document).keydown( (e) => test.keyHandler(e) );
}

class NoTypeTest { 
    constructor(test_length) { 
        this.started = false; // set test state to not started
        this.token = $("section#test input[name='csrfmiddlewaretoken']").first().val(); // token for ajax requests
        // initialize timer
        this.test_length = test_length;
        $("section#timer span").text(this.test_length);
        this.timer;
        // itialize stats
        this.chars_correct = 0;
        this.chars_incorrect = 0;
        this.stats_obj = {
            // second: [chars_correct, chars_incorrect, wpm]
        }
        this.final_score = undefined;
        // initialize stack for backspace
        this.undoStack = new Array();
        // set first word and character
        $("#wordWrapper div.word").first().addClass("current");
        $("#wordWrapper div.word.current div.letter").first().addClass("nextChar");
    }

    displayResults() {
        // colors
        const currMode = $(":root")[0].style.getPropertyValue("--mode");
        if (!modeColors.hasOwnProperty(currMode)) {
            alert("Current mode not found in mode dictionary!");
            location.reload();
            return;
        }
        const colors = modeColors[currMode];
        // data
        const sorted_keys = Object.keys(this.stats_obj).map(k => parseInt(k)).sort((a,b) => a-b);
        const ordered_wpm = sorted_keys.map(k => this.stats_obj[k][2].toFixed(2));
        // default styling
        Chart.defaults.global.defaultFontColor = colors.keyPressDark;
        Chart.defaults.global.defaultFontSize = 14;
        Chart.defaults.global.defaultFontFamily = "'Roboto Mono', monospace";
        Chart.defaults.global.defaultFontStyle = "bold";
        // chart
        const ctx = $("section#results canvas#testResultChart");
        let resultChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: sorted_keys,
                datasets: [
                    {
                        label: 'WPM',
                        data: ordered_wpm,
                        backgroundColor: colors.keyLight,
                        borderColor: colors.keyDark,
                        borderWidth: 5,
                        pointBackgroundColor: colors.text,
                        pointBorderColor: colors.text,
                        pointHoverBackgroundColor: colors.keyPressLight,
                        pointHoverBorderColor: colors.keyPressLight,
                        pointBorderWidth: 5,
                        fill: 'origin', 
                    },
                ]
            },
            options: {
                layout: {
                    padding: { top: 20, left: 20, bottom: 20, right: 20 }
                },
                responsive: true,
                legend: { 
                    display: false,
                },
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        scaleLabel: { 
                            display: true,
                            fontSize: 20,
                            labelString: "WPM" 
                        }, 
                        gridLines: { display: false }
                    }],
                    xAxes: [{
                        scaleLabel: { 
                            display: true,
                            fontSize: 20,
                            labelString: "Time (seconds)" 
                        },
                        gridLines: { display: false }
                    }]
                }
            },
        });
        // show test results
        const total_chars = this.chars_correct + this.chars_incorrect;
        $("section#results h1#resultTitle").text(`You Scored ${this.final_score.toFixed(2)} WPM!`);
        $("section#results span#accuracyValue").text(`${(this.chars_correct*100/total_chars).toFixed(2)}%`);
        $("section#results span#charsCorrectValue").text(`${this.chars_correct}/${total_chars}`);
        $("section#results span#charsIncorrectValue").text(`${this.chars_incorrect}/${total_chars}`);
        $("section#results").fadeIn(500);
    }

    storeResults() {
        $.ajax({
            beforeSend: (xhr, settings) => {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", this.token);
                }
            },
            method: "POST",
            url: "/upload_test_results",
            data: {"score": this.final_score.toFixed(3)},
            dataType: 'json',
            success: function (e) {
                return;
            },
            error: function (e) {
                console.log(e);
                alert("The previous request resulted in an error.");
                return;
            },
        });
    }

    endTest(finished = true) {
        if (!finished) { 
            clearInterval(this.timer);
            // set autoRestart on 
            $.ajax({
                beforeSend: (xhr, settings) => {
                    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                        xhr.setRequestHeader("X-CSRFToken", this.token);
                    }
                },
                method: "POST",
                url: "/auto_restart",
                data: {"value": "on"},
                dataType: 'json',
                success: () => location.reload(),
            });
            
            return;
        }
        if (Object.keys(this.stats_obj).length !== this.test_length) {
            alert("It appears that your test was ended prematurely!");
            location.reload();
            return;
        }
        // end keystroke listeners
        $(document).off("keydown");
        $(document).off("keyup");
        // hide test and keeb 
        $("section#test").hide();
        $("section#keeb").hide();
        this.final_score = this.stats_obj[this.test_length][2];
        // send ajax request to DB
        this.storeResults();
        // display graph to user 
        this.displayResults();
    }

    startTimer() {
        const updatePage = (s) => $("section#timer span").text(s);
        let i = this.test_length;
        this.timer = setInterval( function () {
            i--;
            updatePage(i);
            if (i === 0) clearInterval(this.timer);
        }, 1000);
    }

    startCounter() {
        const test_length = this.test_length;
        const calculateWPM = (s) => 12*this.chars_correct/s;
        const writeWPM = (wpm) => $("section#counter span").text(`${Math.floor(wpm)} WPM`);
        const updateStats = (s, wpm) => (
            this.stats_obj[s] = [
                this.chars_correct,
                this.chars_incorrect,
                wpm
            ]
        );
        const endFunc = () => $("section#test input#testState").val("ended").trigger("change");
        let i = 0;
        let counter = setInterval( function () {
            i++;
            const wpm = calculateWPM(i);
            writeWPM(wpm);
            updateStats(i, wpm);
            if (i === test_length) {
                clearInterval(counter);
                endFunc();
            }
        }, 1000);
    }

    startTest() {
        // set autoRestart off
        $.ajax({
            beforeSend: (xhr, settings) => {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", this.token);
                }
            },
            method: "POST",
            url: "/auto_restart",
            data: {"value": "off"},
            dataType: 'json',
        });

        $("section#test input#testState").val("started");
        $("section#test input#testState").change( (e) => this.endTest() );
        this.startTimer();
        this.startCounter();
    }
    
    handleBackspace(nextChar) {
        if (this.undoStack.length > 0) {
            // backspace can only serve to undo a previous
            // action if there is one
            const func = this.undoStack.pop(); 
            func.call();
        } else {
            this.nextLetter(nextChar, false);
        }
    }    

    nextLetter(nextChar, correct) {
        // push undo function to stack
        this.undoStack.push(this.prevLetter);
        // give current letter the `correct` or `incorrect` class as needed
        // and update chars_correct and chars_incorrect
        if (correct) {
            this.chars_correct += 1;
            nextChar.addClass("correct");
        } else {
            this.chars_incorrect += 1;
            nextChar.addClass("incorrect");
        }
        // pass `nextChar` class to next letter in current word if one exists
        nextChar.removeClass("nextChar");
        const nextLetters = nextChar.nextAll("div.letter");
        if (nextLetters.length > 0) {
            nextLetters.first().addClass("nextChar");
        } else {
            nextChar.addClass("beforeNextChar");
            const nextSpaces = nextChar.nextAll("div.space");
            if (nextSpaces.length === 0) throw "Error: NotTypeTest.nextLetter: 'nextSpaces' has length 0";
            nextSpaces.first().addClass("currentSpace");
        }
    }

    // undoes the work of `nextLetter`
    prevLetter() {
        const nextChars = $("#wordWrapper div.letter.nextChar");
        // handle case where the current character is the space between words
        if (nextChars.length == 0) {
            // pass toggle `beforeNextChar` and `nextChar`
            const beforeNext = $("#wordWrapper div.letter.beforeNextChar").first();
            beforeNext.removeClass("beforeNextChar");
            if (beforeNext.hasClass("correct")) beforeNext.removeClass("correct");
            else beforeNext.removeClass("incorrect");
            beforeNext.removeClass("beforeNextChar");
            beforeNext.addClass("nextChar");
            return;
        }
        // handle regular case 
        const nextChar = nextChars.first();
        const prevLetters = nextChar.prevAll("div.letter");
        // since prevLetter() is top of the stack, `prevLetters` should not be empty
        if (prevLetters.length === 0) throw "Error: NotTypeTest.prevLetter: 'prevLetters' has length 0";
        const prevChar = prevLetters.first();
        // remove previous character's `correct` or `incorrect` classes
        if (prevChar.hasClass("correct")) prevChar.removeClass("correct");
        else prevChar.removeClass("incorrect");
        // pass `nextChar` class to previous character
        nextChar.removeClass("nextChar");
        prevChar.addClass("nextChar");
    }

    nextWord(correct) {
        // push undo function to stack
        this.undoStack.push(this.prevWord);
        // store current number of correct and incorrect chars
        // and handle potential incorrect spaces
        let currentSpaces = $("#wordWrapper div.space.currentSpace");
        if (currentSpaces.length === 0) throw "Error: NotTypeTest.nextWord: 'currentSpaces' has length 0";
        currentSpaces.first().removeClass("currentSpace");
        if (correct) {
            this.chars_correct += 1;
        } else {
            currentSpaces.first().addClass("incorrect");
            this.chars_incorrect += 1;
        }
        // remove `beforeNextChar` class
        $("#wordWrapper div.letter.beforeNextChar").first().removeClass("beforeNextChar");
        // pass `current` class from current word to next word 
        // add `complete` class to previous word
        const currentWord = $("#wordWrapper div.word.current").first();
        currentWord.removeClass("current");
        currentWord.addClass("complete");
        const nextWord = currentWord.nextAll("div.word").first();
        nextWord.addClass("current");
        // pass `nextChar` to first letter of next word
        nextWord.children("div.letter").first().addClass("nextChar");
    }

    // undoes the word of `nextWord`
    prevWord() {
        const currWord = $("#wordWrapper div.word.current").first();
        // since prevWord() is top of the stack, `prevWords` should not be empty
        const prevWord = currWord.prevAll("div.word").first();
        // pass `current` class to previous word
        currWord.removeClass("current");
        prevWord.removeClass("complete");
        prevWord.addClass("current");
        // remove (in)correct from previous space div
        const prevSpace = prevWord.children("div.space").first();
        prevSpace.first().addClass("currentSpace");
        prevSpace.first().removeClass("incorrect");
        prevSpace.first().removeClass("correct");
        // add `beforeNextChar` class to last letter in previous word
        const nextChars = $("#wordWrapper div.letter.nextChar");
        if (nextChars.length > 0) {
            nextChars.first().removeClass("nextChar");
        }
        prevWord.children("div.letter").last().addClass("beforeNextChar");
    }

    preventKey(key) {
        // check if key is alpha
        if (key.length === 4 && key.substring(0,3) === "key") return true;
        // check if key is digit
        if (key.length === 6 && key.substring(0,5) === "digit") return true;
        // check others
        const others = ["space", "backspace", "tab"];
        if (others.includes(key)) return true;
        return false;
    }

    keyHandler(e) {
        // get user keystroke
        const key = e.code.toString().toLowerCase();
        // allow certain keystrokes, prevent others
        if (this.preventKey(key) === false) return;
        // start timer if not already started
        const test_state = $("section#test input#testState").val();
        if (test_state === "not-started") this.startTest();
        // check for tab to restart
        if (key === "tab") {
            this.endTest(false);
            return;
        }
        // determine correct next character and set values
        const nextChars = $("#wordWrapper div.letter.nextChar").first()
        let nextChar, nextVal;
        if (nextChars.length > 0) {
            nextChar = nextChars.first()
            nextVal = nextChar.html()
        } else {
            nextChar = null;
            nextVal = "space";
        }
        // read input and determine outcome 
        if (key === "backspace") {
            this.handleBackspace(nextChar);
        } else if (nextVal === "space") {
            // if non-space is used between words, mark
            // character as incorrect and move to next word
            this.nextWord(key === "space");
        } else {
            const correct = (key.length === 4 && key.substring(3,4) === nextVal)
            this.nextLetter(nextChar, correct);
        }
    }
}

$(document).ready( function() {
    // instantiate test object when test prompt is clicked
    $("section#words").click( setupTest );
});