// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, Assignment: Functions Assignment

(function () {
    "use strict";
    // Lottery games Florida lottery (6 numbers between 1 and 53) || Powerball (5 numbers between 1 and 59 + 1 number between 1 and 35)

    // variables declaration
    var lotteryGame, lotteryType, rangeMin = 1, flRangeMax = 53, flRangeQty = 6, pbRangeMax = 59, pbRangeQty = 5, pbMax = 35, pbQty = 1, rangeMax = 0, rangeQty = 0, playerNumbers = [], pbPlayerNumber, winningNumbers = [], pbWinningNumber, numbersRangeMatching, pbMatch = false, winner = false, resultMessage;

    // choose between games
    do {//loop
        lotteryGame = window.prompt("Choose game? (Florida Lotery=f) (Powerball=p):", "f");
    } while (!(lotteryGame in { "f": 0, "F": 0, "p": 0, "P": 0 }))// validate values in list

    // florida lottery? otherwise powerball
    if (lotteryGame.toLowerCase() == "f") {
        lotteryType = "FloridaLotto";
        rangeMax = flRangeMax;
        rangeQty = flRangeQty;
    } else {
        lotteryType = "Powerball";
        rangeMax = pbRangeMax;
        rangeQty = pbRangeQty;
    }
    // prompt for player numbers
    playerNumbers = promptNumbers(rangeMin, rangeMax, rangeQty);
    // generate winning numbers
    winningNumbers = generateWinningNumbers(rangeMin, rangeMax, rangeQty);
    // find matches
    numbersRangeMatching = findMatches(winningNumbers, playerNumbers);
    // prompt for extra number for powerball
    if (lotteryType == "Powerball") {
        pbPlayerNumber = promptNumbers(rangeMin, pbMax, pbQty);
        pbWinningNumber = generateWinningNumbers(rangeMin, pbMax, pbQty);
        pbMatch = (pbPlayerNumber[0] == pbWinningNumber[0]);
    }
    // check for winner
    winner = checkWinner(numbersRangeMatching, pbMatch);
    // calling function to construct message
    resultMessage = constructMessage(winner, lotteryType, numbersRangeMatching);
    // display final message
    console.log(resultMessage);

    // function definition to prompt for x quantity numbers, between min and max and return an array
    function promptNumbers(min, max, quantity) {
        var numbers = [], promptMessage, newNumber;
        // Prompt for x numbers and validating numbers
        while (numbers.length < quantity) {
            // construct message to display on prompt 
            if (quantity == 1) {
                promptMessage = "[1 to 35] Enter Power Ball number:";
            } else {
                promptMessage = "[" + min + " to " + max + "] Enter one number to play: \n Already entered: ";
                // construct message to display already entered numbers
                for (var number in numbers) {
                    promptMessage += numbers[number] + " ";
                }
            }
            // prompt and validate new entered number, suggest random number
            do {
                newNumber = Number(window.prompt(promptMessage, Math.floor(Math.random() * ((max - min) + 1) + min)));
            } while (newNumber < min || isNaN(newNumber || newNumber > max));
            // is entered number in array already? if it is ask for new number for same position
            if (numbers.indexOf(newNumber) < 0) {
                // add player numbers to array
                numbers.push(newNumber);
            }
        };
        return numbers;
    }

    // function definition to generate x quantity of winning numbers, between min and max, and unique
    function generateWinningNumbers(min, max, quantity) {
        var numbers = [];
        while (numbers.length < quantity) {
            // generate new number
            var newNumber = Math.floor(Math.random() * ((max - min) + 1) + min);
            // is number in array already?
            if (numbers.indexOf(newNumber) < 0) {
                // add number to array
                numbers.push(newNumber);
            }
        };
        return numbers; // return array of unique numbers
    }

    // function definition to find matches of winning numbers
    function findMatches(winning, player) {
        var matching = [];
        for (var i = 0; i < winning.length; i++) {
            // look for each played number in winning array, if found add to matching array
            if (winning.indexOf(player[i]) >= 0) {
                matching.push(player[i]);
            }
        }
        return matching;
    }

    // function definition to checkWinner
    function checkWinner(matching, pbMatched) {
        var result = false; // not a winner by default
        if (matching.length == rangeQty) { // possible winner
            if (lotteryType == "FloridaLotto" || pbMatched) { // winner
                result = true;
            }
        }
        return result;
    }
    // function definition to construct message
    function constructMessage(isWinner, lotType, matching) {
        var newMessage = "";
        if (isWinner) { // winner message
            newMessage = "You are a winner!";
        } else { // not a winner message
            newMessage = "ohhh noo, you got " + matching.length;
            switch (matching.length) { // display message based on how many matches
                case 0:
                    newMessage += " match.";
                    break;
                case 1:
                    newMessage += " match. it was ";
                    break;
                default:
                    newMessage += " matches. They were ";
                    break;
            }
            // add actuall matching numbers to message
            for (var match in matching) {
                newMessage += matching[match] + " ";
            }
        }
        // display winning numbers
        newMessage += "\n the winning numbers are: ";
        for (var winningNumber in winningNumbers) {
            newMessage += winningNumbers[winningNumber] + " ";
        }
        // add powerball if applicable
        if (lotType == "Powerball") {
            newMessage += " with Powerball " + pbWinningNumber;
        }
        // display player numbers
        newMessage += "\n the player numbers are: ";
        for (var playerNumber in playerNumbers) {
            newMessage += playerNumbers[playerNumber] + " ";
        }
        // add powerball if applicable
        if (lotType == "Powerball") {
            newMessage += " with Powerball " + pbPlayerNumber;
        }
        return newMessage; // return constructed message
    }

    /*
     * ohhh noo, you got 1 match. it was 29 
     * the winning numbers are: 4 49 1 29 32 16 
     * the player numbers are: 29 3 35 31 46 6 
     */
})();