// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, 03/10/2015, Assignment: Expressions assignment

(function () {
    "use strict";
    // Morgage calculator: It will ask you a couple of questions such as loan amount, interest rate, % downpayment and if you will be using FHA financing or not. It will then calculate and display your downpayment, closing cost, and monthly payment
   
    // variable declaration and assignment for loan amount
    var loanAmount = Number(window.prompt("Enter loan amount:"));
    // variable declaration and assignment for interest rate
    var interestRate = Number(window.prompt("Enter interest rate:"));
    // variable declaration and assignment for percent down payment
    var percentDownPayment = Number(window.prompt("Enter % down payment"));
    // variable declaration and assignment for number of years
    var numberOfYears = Number(window.prompt("Enter number of years"));
    // down payment calculation and display
    var downPayment = (loanAmount * percentDownPayment) / 100;
    console.log("Down payment: $" + downPayment);
    // variable declaration and assignment from prompt for FHA
    var isFha = window.prompt("Is this FHA (Y)|(N):");

})();