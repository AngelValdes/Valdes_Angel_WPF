// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, 03/10/2015, Assignment: Expressions assignment

(function () {
    "use strict";
    // Morgage calculator: It will ask you a couple of questions such as loan amount, interest rate, % downpayment and if you will be using FHA financing or not. It will then calculate and display your downpayment, closing cost, and monthly payment
    // Use at least two of +=,-=,++,--,*=,/=
    // An example of an	array used	as	part of	the	calculation.
    // A string	variable for your output. like 	"I typed in 5 for length and 6 for height and my calculator	gave me	30	for	the	area. */

    var loanAmount = Number(window.prompt("Enter loan amount:"));
    var interestRate = Number(window.prompt("Enter interest rate:"));
    var percentDownPayment = Number(window.prompt("Enter % down payment"));

    var downPayment = (loanAmount * percentDownPayment) / 100;
    console.log("Down payment: $" + downPayment);
  

})();