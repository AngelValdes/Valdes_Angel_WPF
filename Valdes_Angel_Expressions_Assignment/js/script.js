// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, 03/10/2015, Assignment: Expressions assignment

(function () {
    "use strict";
    // Morgage calculator: It will ask you a couple of questions such as loan amount, interest rate, % downpayment and if you will be using FHA financing or not. It will then calculate and display your downpayment, and monthly principal & Interest amount
   
    // variable declaration and assignment for loan amount
    var loanAmount = Number(window.prompt("Enter loan amount $:", 230000));
    // variable declaration and assignment for interest rate
    var monthlyInterestRate = (Number(window.prompt("Enter interest rate %:", 4.25))/100)/12;
    // variable declaration and assignment for percent down payment
    var percentDownPayment = Number(window.prompt("Enter down payment %", 3.5));
    // variable array of available number of years mortgage
    var nbrOfYearsAvailable = [10, 15, 30];

    // variable declaration and assignment for number of months chosen by user
    var payments = 12 * Number(window.prompt("Choose number of years between " + nbrOfYearsAvailable[0] + ", " + nbrOfYearsAvailable[1] + ", " + nbrOfYearsAvailable[2] + ":", 30));
    // down payment calculation 
    var downPayment = (loanAmount * percentDownPayment) / 100;
    // down payment display
    console.log("Down payment: $" + downPayment);

    // variable declaration and assignment from prompt for FHA
    var isFha = window.prompt("Is this FHA (Y)|(N):", "Y");
    // declare and initialize pmiAmount on 0
    var pmiAmount = 0;
    // if Fha then calculate pmi amount
    if (isFha.toUpperCase() === "Y") {
        pmiAmount += loanAmount * 2.5;
    }

    // calculate monthly PrincipalAndInterest
    var calcMonthlyInterest = (1 + monthlyInterestRate);
    var monthlyPrincipalAndInterest = (loanAmount * (monthlyInterestRate * (Math.pow(calcMonthlyInterest, payments)))) / (Math.pow(calcMonthlyInterest, payments) - 1);

    console.log(monthlyPrincipalAndInterest);
    console.log(monthlyPrincipalAndInterest);

})();