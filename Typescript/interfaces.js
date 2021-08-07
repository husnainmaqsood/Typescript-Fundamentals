// interfaces are only for declaration, not for the implementation
class Engine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
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
class CustomEngine {
    start(callback) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }
}
class Accessory {
    constructor(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
}
class Auto {
    constructor(options) {
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.state = options.state;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
    }
    calculateTotal() {
        var taxRate = 0.08;
        return this.basePrice + (taxRate * this.basePrice);
    }
    addAccessoryes(...accessories) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }
    getAccessoryList() {
        return this.accessoryList;
    }
    get basePrice() {
        return this._basePrice;
    }
    set basePrice(basePrice) {
        if (basePrice <= 0)
            throw 'Price must be greater than 0';
        this._basePrice = basePrice;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value == undefined)
            throw 'Please supply an engine';
        this.engine = value;
    }
}
class Truck extends Auto {
    constructor(options) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }
}
window.onload = function () {
    var truck = new Truck({
        engine: new Engine(250, 'V6'),
        basePrice: 34000,
        state: 'Arizone',
        make: 'Ford',
        model: 'F-150',
        year: 2013,
        bedLength: 'Short bed',
        fourByFour: true
    });
    alert(truck.bedLength);
};
