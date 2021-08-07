var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello " + this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter("World"); // if we anything except a string, it will throw an error. because we have defined the type will be string
greeter.greet();
