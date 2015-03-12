// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, 03/10/2015, Assignment: Expressions assignment

(function () {
    "use strict";
    // Morgage calculator: It will ask you a couple of questions such as loan amount, interest rate, % downpayment and if you will be using FHA financing or not. It will then calculate and display your downpayment, and monthly principal & Interest amount
   
    // variable declaration and assignment for loan amount
    var salePrice = Number(window.prompt("Enter sale price $:", 230000));
    // variable declaration and assignment for interest rate
    var interestRate = Number(window.prompt("Enter interest rate %:", 4.25));
    var monthlyInterestRate = (interestRate / 100) / 12;
    // variable declaration and assignment for percent down payment
    var percentDownPayment = Number(window.prompt("Enter down payment %", 3.5));
    // calculate loan amount
    var loanAmount = salePrice;
    loanAmount -= (salePrice * percentDownPayment)/100;
    // variable array of available number of years mortgage
    var nbrOfYearsAvailable = [10, 15, 30];

    // variable declaration and assignment for number of months chosen by user
    var nbrOfYearsEntered = Number(window.prompt("Choose number of years between " + nbrOfYearsAvailable[0] + ", " + nbrOfYearsAvailable[1] + ", " + nbrOfYearsAvailable[2] + ":", 30));
    var payments = 12 * nbrOfYearsEntered;
    // down payment calculation 
    var downPayment = (salePrice * percentDownPayment) / 100;

    // variable declaration and assignment from prompt for FHA
    var isFha = window.prompt("Is this FHA (Y)|(N):", "Y");
    // declare and initialize pmiAmount on 0
    var pmiAmount = 0;
    // if Fha then calculate pmi amount
    if (isFha.toUpperCase() === "Y") {
        pmiAmount += loanAmount * 0.025; // estimated amount
    }

    // calculate monthly PrincipalAndInterest
    var calcMonthlyInterest = (1 + monthlyInterestRate);
    var monthlyPrincipalAndInterest = (loanAmount * (monthlyInterestRate * (Math.pow(calcMonthlyInterest, payments)))) / (Math.pow(calcMonthlyInterest, payments) - 1);
    // display final result
    console.log("For an input sale price of $" + salePrice + ", monthly interest rate of " + interestRate + "%, a percent down payment of " + percentDownPayment + "%, and a loan for " + nbrOfYearsEntered + " years. \n Your loan amount is $" + loanAmount +  " after a down payment of $" + downPayment + ", your monthly principal + interest amount is: $" + monthlyPrincipalAndInterest + ". \n Your estimated PMI is $" + pmiAmount + ".");


})();