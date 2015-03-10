// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, Assignment: ?

(function () {
    "use strict";
    // prompt 
    var userInput = window.prompt("Enter your year of birth");
    console.log(userInput);

    // calculating the area of a rectangle
    var width = Number(window.prompt("Enter rectangle width:"));
    var height = Number(window.prompt("Enter rectangle height:"));
    var area = width * height;
    console.log("Area of rectangle is: " + area);

    // alert
    window.alert("area of rectangle is " + area);
})();