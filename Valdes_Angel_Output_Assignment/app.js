// Immediately Invoke Function Expression - IIFE (for JavaScript Scoping to avoid variables polluting global environment) 
(function () {
    // JavaScript strict mode
    "use strict";
    // Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, Assignment: Creating Variables and Output

    // declare variable and assign string value
    var gymName = "LA Fitness";
    // declare variable and assign string value
    var gymAddress = "12245 SW 88 St";
    // declare variable and assign numeric value
    var gymFloors = 2;
    // declare variable and assign boolean value
    var gymHasRacquetballCourts = true;

    // display message in the console concatenating string and the variables' values
    console.log("To do exercise, I usually go to gym \"" + gymName + "\" located at " + gymAddress + ". My gym has " + gymFloors + " floors full of machines.\nDoes my gym have racquetball courts?:" + gymHasRacquetballCourts);

    // I would definitely prefer to create an object called gym with all this properties inside, but one step at a time. :) 
    var gym = {
        name: "LA Fitness",
        address: "",
        floors: 2,
        hasRacquetballCourts: true
    };

    console.log("..." + gym.name + "...");
})();