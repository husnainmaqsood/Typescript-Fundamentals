//any

// these both are of type any
var data: any;
var info;

// this function takes a value of type any and also returns of type any
var doSomething = function (arg){
    return arg;
}


var y = doSomething(5); // here y is of type any becaues doSomething is returning any type, y is infering the type of doSomething

// we can make doSomething any explicitly
// var doSomething: any = function (arg){
//     return arg;
// }

// var y:any = doSomething(5);

// Note: wehen no type is written explicityly, then type any is infered


//Premitive types


var age =  23; // of type number because initialized with the number
var score : number = 25.56; // we have explicitly made it of type number
var rating = 99.88;  // of type number

// same is the case here, in hasData we have made it boolean explicityly but isReady is inferred as boolean becauese it is initialized with the boolean
var hasData: boolean = true;
var isReady = true;
var isBald = function() { return 'yes';}
var hasHair = isBald(); // now hasHair has inferred type string because isBald is returning the type string
// if we want a boolean answer from isBald function we can do so, using double negation
// varhasHair = !!isBald() // double negation returns true for all truthy expressions and false for falsy expressions

// string array

function getArrayLength(x: string[]){
    var len = x.length; // len has inferred as a number because length is returning length(a number)
    return len;
}

var names: string[] = ['John', 'Mike', 'Colin', 'Lee'];
// var firstPerson: string =  names[0]; first person doesn't need any annotation because names[0] will return a string and it will be inferred
var firstPerson = names[0]
console.log(getArrayLength(names));


// null 
// null can be set to any of the premitive types
var guitarSales: any = null;
var animal = null;
var orderDate: Date = null;

// undefined
//undefined can also be set to any of the premitive types
var quantity: number;
var company = undefined;

console.log("undefined examples: ");
console.log(quantity);
console.log(company);


// if we don't initialize the variables, ts set their value to undefined by default, but we set the null explicitly