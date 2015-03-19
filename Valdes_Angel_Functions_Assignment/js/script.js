// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, Assignment: Functions Assignment

(function () {
    "use strict";
    // Florida lottery game (6 numbers between 1 and 53)
    // variables declaration
    var playerNumbers = [], lastNumberPlayed = 0, winningNumbers = [];
    // Prompt for 6 numbers and validating numbers
    for (var i = 1; i <= 6; i++) {

        do { // loop validation
            lastNumberPlayed = Number(window.prompt("[From 1 to 53], Enter lottery number ("+ i + "):", 10));
        } while (lastNumberPlayed < 1 || isNaN(lastNumberPlayed || lastNumberPlayed > 53));
        // add player numbers to array
        playerNumbers.push(lastNumberPlayed);
    };
    // generate winning numbers

    console.log("ready");

})();