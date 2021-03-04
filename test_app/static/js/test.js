class NoTypeTest { 
    constructor(test_length) { 
        this.started = false; // set test state to not started

        // initialize timer
        this.test_length = test_length;
        $("section#timer span").text(this.test_length);

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

    endTest(e) {
        this.final_score = this.stats_obj[this.test_length][2];
        console.log(`Test is over! Here is your final WPM: ${this.final_score}.`);
        // send ajax request to DB
        const token = $("section#test input[name='csrfmiddlewaretoken']").first().val();
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
        // display graph to user 

    }

    startTimer() {
        const updatePage = (s) => $("section#timer span").text(s);
        let i = this.test_length;
        let timer = setInterval( function () {
            i--;
            updatePage(i);
            if (i === 0) clearInterval(timer);
        }, 1000);
    }

    startCounter() {
        const test_length = this.test_length;
        const calculateWPM = (s) => Math.round(12*this.chars_correct/s);
        const writeWPM = (wpm) => $("section#counter span").text(`${wpm} WPM`);
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
        $("section#test input#testState").val("started");
        $("section#test input#testState").change( (e) => this.endTest(e) );
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
        // store current number of correct and incorrect chars
        this.chars_correct += correct;
        this.chars_incorrect += !correct;
        // give current letter the `correct` or `incorrect` class as needed
        if (correct) nextChar.addClass("correct");
        else nextChar.addClass("incorrect");
        // pass `nextChar` class to next letter in current word if one exists
        nextChar.removeClass("nextChar");
        const nextLetters = nextChar.nextAll("div.letter");
        if (nextLetters.length > 0) {
            nextLetters.first().addClass("nextChar");
        } else {
            nextChar.addClass("beforeNextChar");
        }
    }

    // undoes the work of `nextLetter`
    prevLetter() {
        const nextChars = $("#wordWrapper div.letter.nextChar");
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
        const nextChar = nextChars.first();
        const prevLetters = nextChar.prevAll("div.letter");
        // since prevLetter() is top of the stack,
        // `prevLetters` should not be empty
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
        this.chars_correct += correct;
        this.chars_incorrect += !correct;
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
        // get previous word
        const prevWords = currWord.prevAll("div.word");
        if (prevWords.length === 0) throw "Error: NoTypeTest.prevWord: 'prevWords' has length 0";
        const prevWord = prevWords.first();
        // pass `current` class to previous word
        currWord.removeClass("current");
        prevWord.addClass("current");
        // add `beforeNextChar` class to last letter in previous word
        const nextChars = $("#wordWrapper div.letter.nextChar");
        if (nextChars.length > 0) {
            nextChars.first().removeClass("nextChar");
        }
        prevWord.children("div.letter").last().addClass("beforeNextChar");
    }

    keyHandler(e) {
        // start timer if not already started
        const test_state = $("section#test input#testState").val();
        if (test_state == "not-started") this.startTest();
        // handle keystroke
        const key = e.code.toString().toLowerCase();
        const nextChars = $("#wordWrapper div.letter.nextChar").first()
        let nextChar, nextVal;
        if (nextChars.length > 0) {
            nextChar = nextChars.first()
            nextVal = nextChar.html()
        } else {
            nextChar = null;
            nextVal = "space";
        }
        if (nextVal === "space" && key === "space") {
            this.nextWord(true);
        } else if (key.length === 4 && key.substring(3,4) === nextVal) {
            this.nextLetter(nextChar, true);
        } else if (key === "backspace") {
            this.handleBackspace(nextChar);
        } else if (nextChar === null) {
            // if non-space is used between words, mark
            // character as incorrect and move to next word
            this.nextWord(false);
        } else {
            this.nextLetter(nextChar, false);
        }
    }
}

$(document).ready( function() {
    // instantiate test object when test prompt is clicked
    $("section#words").click( function () {
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
        // open keyup listener, send all keystrokes to handler
        $(document).keyup( (e) => test.keyHandler(e) );
    });
});