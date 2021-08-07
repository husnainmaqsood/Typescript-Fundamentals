

class Engine{
    constructor(public horsePower: number, public engineType: string){}
}

class Car{
    private _engine: Engine;
    constructor(engine: Engine){
        this._engine = engine;
    }

    get engine(): Engine{
        return this._engine;
    }

    set engine(value: Engine) {
        if(this.engine == undefined){
            throw "Please supply an engine"
        }
        this._engine = value;
    }

    start(): void{
        console.log("Car engine started "+ this._engine.engineType);
    }
}
console.log("Engine");
var engine = new Engine(300, 'V8');
var car =  new Car(engine);
console.log(car.engine.engineType);
car.start();

// when we use this property syntax of get and set, then method a kind of becomes a variable and we can use this as
console.log("Engine property "+ car.engine.engineType);
car.engine.engineType = 'V10';
console.log("After setting new engine using property, the engine is "+ car.engine.engineType);