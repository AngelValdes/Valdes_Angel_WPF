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
   
})();