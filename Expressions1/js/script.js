// Student: Angel Valdes, Student#: 0002747159, Class: SDI, Term: C201503, Assignment: Arithmetic operators?

(function () {
    "use strict";
    // define and assign value to variable using assignment operator
    var a = 2; 
    console.log("a=" + a);

    // addition operator
    // a + 3; // not correct!
    // a = a + 3; // requires assignment operator to change the value of a
    a += 3;
    console.log("a now is =" + a);

    // age example with substraction operator
    var yearBorn = 1973;
    var age = 2015 - yearBorn -1;
    console.log("Age=" + age);

    // area of a triangle
    var width = 4;
    var height = 5;
    var area = (width * height)/2;
    console.log("Area of triangle having width=" + width + " and height=" + height + " is " + area);
})();