// In typescript, when we declare a variable and also do initialization at that thime, then the type of thing that is assigned to that variable becomes the datatype of that variable. like
var num = 2; // this is of number type
var str = "Hello"; //this is of string type
var bool = true; // this is of boolean type

// another method, type annotations
var num: number =2; // we are explicitly telling the type of the variable


// another scenario
var any1; // type could be of anytype(string, number or a boolean etc)

var num1: number; // type annotation

var num2: number = 2; // type annotation setting the value

var num3 = 3; // type inference(number)

var num4 = num3 + 100; // type inference(number)

var str1 = num1 + 'some string'; // type infrence (string), concatenate number with the string


// this line will throw an error
// var notHappy : number = num1 + 'some string' 

