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

    
})();