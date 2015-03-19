// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, Assignment: Functions Worksheet

(function () {
    "use strict";
    //Example: Calculate the area of a rectangle given the width and height of the rectangle.
    //Calculate the Area of a Rectangle
    //var width = 5;
    //var height = 6;
    //var area = calculateArea(width, height);
    //console.log("The Area of the Rectangle is " + area);
    //function calculateArea(w, h )
    //{
    //    return w *h;
    //} 

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
    // display result
    console.log(message + circumference);

    //Stung!
    /* It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function 
        Given: Victim’s weight (in pounds)     
        Parameter(s) for function: Victim’s weight (in pounds)
        Return: Number of Bee stings
        Result to print to the console: “It takes X bee stings to kill this animal.*/
    // variable definitions
    var victimWeight = 0, numberOfBees = 0;
    // victimWeight prompt and validation
    do { //loop
        victimWeight = Number(window.prompt("Enter victim weight in pounds:", 10));
    } while (victimWeight <= 0 || isNaN(victimWeight))

})();