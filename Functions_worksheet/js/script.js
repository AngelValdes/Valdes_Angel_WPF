// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, Assignment: Functions Worksheet

(function () {
    "use strict";
    // Calculate the circumference of a circle. C=2*PI*r
    /* Parameter(s) for function: Radius of the circle
       Return: Circumference of the circle
       Result to print to the console: “The circumference of the circle is X”
     */
    // variable definitions
    var radius = 0, PI = 3.14,  circumference = 0, message = "The circumference of the circle is ";
    // radius prompt and validation
    do { //loop
        radius = Number(window.prompt("Enter radius of a circle:", 10));
    } while (radius <= 0 || isNaN(radius))
    // function definition
    function calculateCircumference(r) {
        return 2 * PI * r;
    }
    // calculation calling function
    circumference = calculateCircumference(radius);
   


})();