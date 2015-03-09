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

    // modulo perator to find the remainder, even numbers module is always 0, no remainder!
    var remainder = 32 % 2;
    console.log("remainder=" + remainder);

    // order of operations PEMDAS to calculate average
    var quiz1 = 87, quiz2 = 100, quiz3 = 60, quiz4 = 80;
    var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
    console.log("average=" + average);

    // perimeter
    var length = 7;
    var newWidth = 6;
    var perimeter = length * 2 + newWidth * 2;
    console.log("perimeter=" + perimeter);

    // arrays in expressions
    var orangeBins = [234, 567, 883];
    var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
    console.log("total=" + total);

    // concatenating strings
    var firstName = "Angel", lastName = "Valdes";
    var fullName = firstName + " " + lastName;
    console.log("total=" + fullName);

    var a2 = "6";
    var b2 = "7";
    var result = a2 + b2;
    console.log("result=" + result);


})();