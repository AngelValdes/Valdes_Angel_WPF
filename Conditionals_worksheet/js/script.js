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

    /* Last Chance for Gas! (optional)
    A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not. Given:
   Gas efficiency of the car (in mpg), Gauge reading of the gas tank (in %), Car’s gas tank capacity (in gallons). Result To Print Out: “Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”*/

    //Group 2: Multiple Results (Choose 1 from this group)
    /* Grade Letter Calculator. (optional)
    A student earns a number grade at the conclusion of a course at Full Sail.  Determine the appropriate letter grade for that number using conditional statements. Assume grades are whole numbers that never go below 0 or above 100. Use the FullSail Grade scale. There should be only one print out to the console. Given: Grade (in percent). Result To Print Out: “You have a X%, which means you have earned a(n) X in the class!”*/

    /* Check the Login
    Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear. Given: Username entered by user, Password entered by user Correct username, Correct password, Result To Print Out: 
    “Welcome, (place their username here)!”  - if the username and password is correct. 
    “User not found. Try again.” -if the username does not match.
    “Password does not match our records.”  -if the username matches but the password does not*/

    var username = window.prompt("Enter username:", "admin");
    var password = window.prompt("Enter password:", "123");
    if (username==="admin") {
        if (password === "123") {
            console.log("Welcome, " + username + "!");
        } else {
            console.log("Password does not match our records.");
        }
    }else{
        console.log("User not found. Try again.");
    }

    //Group 3: Multiple Conditions (Choose 1 from this group)
    /*Tire Pressure I
    To meet to maintenance standards a car’s front two tires should have the same pressure and the back two tires should have the same pressure.  But the front tires and the rear tires can have different pressure than each other, so it is not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine if the tires of a given car are up to spec. Given: Pressure for each tire of the car (in psi) in an array. Result To Print Out: “The tires pass spec!” Or  “ Get your tires checked out!”*/
    var frontLeft = Number(window.prompt("Enter front left tire preassure:", 30));
    var frontRight = Number(window.prompt("Enter front right tire preassure:", 30));
    var backLeft = Number(window.prompt("Enter back left tire preassure:", 35));
    var backRight = Number(window.prompt("Enter back right tire preassure:", 35));

    var tiresPressures = [frontLeft, frontRight, backLeft, backRight];
    if (tiresPressures[0] === tiresPressures[1] && tiresPressures[2] == tiresPressures[3]) {
        console.log("The tires pass spec!");
    } else {
        console.log("Get your tires checked out!");
    }

    /* Movie Ticket Price (optional)
    The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
    Determine which of the two prices the customer is eligible for. Given: Time of Movie (Assume whole numbers here), Age of the customer, Result To Print Out: “The ticket price is X”*/
})();