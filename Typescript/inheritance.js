class Engine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    // start function is taking a callback function, that callback function takes two parameters a boolean and a string, and that callback function returns nothing
    start(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}
class Accessory {
    constructor(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
}
// make getter and setter of private attributes
class Auto {
    // constructor has no return type
    constructor(basePrice, engine, make, model) {
        this.basePrice = basePrice; // here we are using basePrice instead of _basePrice because we have make getter of _basePrice and we can access it through that, and we are doing here
        this.engine = engine;
        this.make = make;
        this.model = model;
    }
    // this function will return a number
    calculateTotal() {
        var taxRate = 0.08;
        return this.basePrice + (taxRate * this.basePrice);
    }
    addAccessories(...accessories) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var acc = accessories[i];
            this.accessoryList += acc.accessoryNumber + ' ' + acc.title + '<br />';
        }
    }
    getAccessoryList() {
        return this.accessoryList;
    }
    get basePrice() {
        return this._basePrice;
    }
    set basePrice(value) {
        if (value <= 0)
            throw 'Price must be greater than 0';
        this._basePrice = value;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value == undefined)
            throw 'Please supply an engine';
    }
}
class Truck extends Auto {
    constructor(basePrice, engine, make, model, bedLength, fourByFour) {
        // as this is child class, so it has to call the constructer of parent class by using keyword super
        super(basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}
window.onload = function () {
    var truck = new Truck(4000, new Engine(300, 'V8'), 'Chevy', 'Silverrado', 'Long Bed', true);
    truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing package'));
    truck.engine.start((status, engineType) => {
        alert(engineType + ' was started');
    });
};
