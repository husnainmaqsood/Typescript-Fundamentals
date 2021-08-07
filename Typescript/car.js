var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log(this.engine + " started");
    };
    Car.prototype.stop = function () {
        console.log(this.engine + " stopped");
    };
    return Car;
}());
var car = new Car("V8");
car.start();
car.stop();
