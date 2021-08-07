"use strict";
//  parameter types can be required or optional
// arrow function expressions are compact form of function expressions, they omit function keyword, have scope of this
// void is a return type of a function that returns no value
exports.__esModule = true;
var myFunc = function (h, w) {
    return h * w;
};
// arrow function form of the above function
var myFunc = function (h, w) { return h * w; };
var squareItSimple = function (h, w) {
    return h * w;
};
var squareItSimplest = function (h, w) { return h * w; };
//  functionName  parameter        returnType, this is the declaration of the function, we will implement it later
var helloWorld;
helloWorld = function (name) {
    // if name will be there it will use name, if name is not there it will use unknown person
    console.log('Hello ' + (name || ' unknown person'));
};
helloWorld();
helloWorld('John');
// this is a squareIt function, which takes an object tect which should have h but w is optional and it will return a number
var squareIt;
var rectA = { h: 7 };
var rectB = { h: 7, w: 12 };
// defining the function
squareIt = function (rect) {
    if (rect.w === undefined) {
        return rect.h * rect.h;
    }
    return rect.h * rect.w;
};
console.log(squareIt(rectA));
console.log(squareIt(rectB));
