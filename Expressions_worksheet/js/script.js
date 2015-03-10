// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, Assignment: ?

(function () {
    "use strict";
    // *** Dog Years ***
    // variable and prompt for age
    var sparkyAge = Number(window.prompt("Enter Sparky's age:"));
    // calculate result
    var result = sparkyAge * 7;
    // display result
    console.log("Sparky is " + sparkyAge + " human years old which is " + result + " in dog years");

    // *** Slice of Pie part 1 ***
    // variables and prompts, cating using Number or parseInt
    var slicesPerPizza = Number(window.prompt("Enter slices per pizza:"));
    var peopleAtParty = parseInt(window.prompt("Enter number of people at party:"));
    var pizzasOrdered = Number(window.prompt("Enter number of pizzas ordered:"));
    // calculate result
    var slicesPerPerson = (pizzasOrdered * slicesPerPizza) / peopleAtParty;
    // display result
    console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

    // *** Slice of Pie part 2 ***
    var remaining = (pizzasOrdered * slicesPerPizza) % peopleAtParty;
    // display result
    console.log("Sparky got " + remaining + " slices of pizza.");

    // *** Average shopping bill ***
    // variables
    var weeklyGroceryTotals = [50, 75, 100, 80, 75];
    // calculation
    var grandTotalSpendOnGrocery = weeklyGroceryTotals[0] + weeklyGroceryTotals[1] + weeklyGroceryTotals[2] + weeklyGroceryTotals[3] + weeklyGroceryTotals[4];
    var averageGroceryTotals = grandTotalSpendOnGrocery / weeklyGroceryTotals.length;
    // display result
    console.log("You have spent a total of $" + grandTotalSpendOnGrocery + " on groceries over 5 weeks. That is an average of $" + averageGroceryTotals + " per week");

    // *** Discounts ***
    // variables
    var originalPrice = Number(window.prompt("Enter original price:"));
    var discountPercentage = Number(window.prompt("Enter discount percentage:"));
    var itemDescription = window.prompt("Enter item description");
    // calculation
    var discountedPriceWithoutTax = originalPrice - (originalPrice * discountPercentage/100);
    var discountedPriceWithTax = discountedPriceWithoutTax + (discountedPriceWithoutTax * 7 / 100);
    // display result
    console.log("Your " + itemDescription + " was originally $" + originalPrice + ", but after a " + discountPercentage + "% discount, it is now $" + discountedPriceWithoutTax + " without tax, and $" + discountedPriceWithTax + " with tax.");

})();