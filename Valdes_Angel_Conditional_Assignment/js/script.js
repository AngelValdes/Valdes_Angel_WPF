// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, 03/10/2015, Assignment: Conditional assignment

(function () {
    "use strict";
    // Tip calculator
   
    // variable declarations 
    var dinnerCost = 0, dinneIn = "", serviceQuality = "", tipPercent = 0, additionalTip = 0, tipAmount = 0, suggestedTip = 0, totalCharge = 0;
    // dinnerCost prompt, validation, and variable assignment
    do { //loop
        dinnerCost = Number(window.prompt("Enter dinner cost:", 50));
    } while (dinnerCost <= 0 || isNaN(dinnerCost)) // validate values positive numbers only
    // dinneIn prompt, validation, and variable assignment   
    do {//loop
        dinneIn = window.prompt("Dinner In? (y=Yes) (n=No):", "y");
    } while (!(dinneIn in { "y": 0, "Y": 0, "n": 0, "N": 0 }))// validate values in list

    // dinneIn?
    if (dinneIn.toLowerCase() === "y") {
        // serviceQuality prompt, validation, and variable assignment
        do {
            serviceQuality = window.prompt("Service quality (b=bad) (g=good) (e=excellent):", "g");
        } while (!(serviceQuality in { "b": 0, "B": 0, "g": 0, "G": 0, "e": 0, "E": 0 })) // validate values in list
        // tip percent selection
        
    } else if (dinneIn.toLowerCase() === "n") { // no dinning in = no tip
        console.log("Suggested tip is only when dinning in.");
    } else {
        console.log("Some strange value you entered! ...");
    }


    // calculate totalCharge
    totalCharge = dinnerCost + tipAmount;
    // display totalCharge
    console.log("Your total charge for a dinne in cost of $" + dinnerCost + " + the tip of $" + tipAmount + " is $" + totalCharge);
})();