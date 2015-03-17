// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, Assignment: Conditional worksheet

(function () {
    "use strict";
    /* To get in the heavyweight division of the Strawberry Festival’s pie eating contest you must weigh 250 lbs or more.  Determine whether an entrant qualifies based on his weight. Given: Competitor’s weight. Result: “The competitor qualifies for the heavyweight division.” Or  “ The competitor needs to gain some weight!" */
    var weight = Number(window.prompt("Enter weight:", 250));
    if (weight >= 250) {
        console.log("The competitor qualifies for the heavyweight division.");
    } else {
        console.log("The competitor needs to gain some weight!");
    }

    //Group 1: Expressions with Conditionals (choose 1)
    //-Celsius to Fahrenheit converter
    /* Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit. Given: Degrees (in F or C), Unit (a string holding an “F” or a “C”). Result: “The temperature is X degrees Celsius.” Or “The temperature is X degrees Fahrenheit.” test values: 32F is 0C, 100C is 212F, 90F is 32.22C*/

    var temperature = Number(window.prompt("Enter temperature:", 32));
    var unit = window.prompt("Enter temperature unit C=Celsius | F=Fahrenheit", "F");
    var result;
    if (unit.toUpperCase() === "F") {
        result = ((5 / 9) * (temperature - 32)) + " degrees Celsius";
    } else {
        result = (((9 / 5) * temperature) + 32) + " degrees Fahrenheit";
    }
    console.log("The temperature is " + result);

    /* Last Chance for Gas!
    A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not. Given:
   Gas efficiency of the car (in mpg), Gauge reading of the gas tank (in %), Car’s gas tank capacity (in gallons). Result To Print Out: “Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”*/


})();