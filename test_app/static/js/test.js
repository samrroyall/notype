// class TimeTracker {
//     constructor(selector, start, end, step=1000) {
//         this.selector = selector;
//         this.start = start;
//         this.end = end;
//         this.step = step;
//     }
// 
//     start() {
//         const iterator = (
//             this.start < this.end
//             ? (i)  => i+1
//             : (i) => i-1 
//         );
//         const selector = this.selector;
//         const end = this.end;
//         let i = this.start;
//         let timer = setInterval( function () {
//             i = iterator(i);
//             $(selector).text(i);
//             if (i === end) {
//                 clearInterval(timer);
//             }
//         }, this.step);
//     }
// }

class NoTypeTest { 
    constructor(test_length) { 
        this.started = false; // set test state to not started
        // initialize timer
        this.test_length = test_length;
        $("section#timer span").text(this.test_length);
        // itialize stats
        this.chars_correct = 0;
        this.storeCorrectChars();
        // initialize stack for backspace
        this.undoStack = new Array();
        // set current word and character
        $("#wordWrapper div.word").first().addClass("current");
        $("#wordWrapper div.word.current div.letter").first().addClass("nextChar");
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
        const counterFunc = function (s) {
            const correct = parseInt($(":root")[0].style.getPropertyValue("--chars-correct"));
            $("section#counter span").text(`${12*correct/s} WPM`);
        };
        const test_length = this.test_length;
        let i = 0;
        let counter = setInterval( function () {
            i++;
            counterFunc(i);
            if (i === test_length) clearInterval(counter);
        }, 1000);
    }

    startTest() {
        this.started = true;
        this.startTimer()
        this.startCounter()
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

    storeCorrectChars() {
        $(":root")[0].style.setProperty("--chars-correct", this.chars_correct);
    }

    nextLetter(nextChar, correct) {
        // push undo function to stack
        this.undoStack.push(this.prevLetter);
        // give current letter the `correct` or `incorrect` class as needed
        this.chars_correct += correct;
        this.storeCorrectChars();
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
        this.chars_correct += correct;
        this.storeCorrectChars();
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
        if (!this.started) this.startTest();
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