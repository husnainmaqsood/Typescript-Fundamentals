var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (this.engine == undefined) {
                throw "Please supply an engine";
            }
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.start = function () {
        console.log("Car engine started " + this._engine.engineType);
    };
    return Car;
}());
console.log("Engine");
var engine = new Engine(300, 'V8');
var car = new Car(engine);
console.log(car.engine.engineType);
car.start();
// when we use this property syntax of get and set, then method a kind of becomes a variable and we can use this as
console.log("Engine property " + car.engine.engineType);
car.engine.engineType = 'V10';
console.log("After setting new engine using property, the engine is " + car.engine.engineType);
