var x = 1; // x is a number

var y; // y is of type any

var firstName = 'John'; // it is of type string

var num1 = 100; // inference typing
var num2: number = 20; // annotation typing

// function addNumbers(n1, n2, n3){ // we can pass strings as a parameters so we have to strict is to the numbers
//     var result =  n1 + n2 + n3;
//     var msg = `Sum is = ${result}`;
//     console.log(msg);
// }
// addNumbers(x, num1, firstName);

// now we can pass only numbers to this
function addNumbers(n1: number, n2: number, n3: number){ 
    var result =  n1 + n2 + n3;
    var msg = `Sum is = ${result}`;
    console.log(msg);
}



addNumbers(x, num1, num2);