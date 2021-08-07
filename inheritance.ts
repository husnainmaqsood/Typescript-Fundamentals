class Engine {
	constructor(public horsePower: number, public engineType: string) {

	}
	// start function is taking a callback function, that callback function takes two parameters a boolean and a string, and that callback function returns nothing
	start(callback: (startStatus: boolean, engineType: string) => void){ // this void means that this callback function will return nothing
		window.setTimeout(() => { // the callback function passed, will execute after every 1 second.
			callback(true, this.engineType);
		}, 1000);


	}

	stop(callback: (stopStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}
}


class Accessory {
	constructor( public accessoryNumber: number, public title: string){

	}
}
// make getter and setter of private attributes
class Auto {
	private _basePrice: number;
	private _engine: Engine;
	make: string;
	model: string;
	accessoryList: string;

	// constructor has no return type
	constructor(basePrice: number, engine: Engine, make: string, model: string){
		this.basePrice = basePrice; // here we are using basePrice instead of _basePrice because we have make getter of _basePrice and we can access it through that, and we are doing here
		this.engine = engine;
		this.make = make;
		this.model = model;
	}
	// this function will return a number
	calculateTotal(): number {
		var taxRate = 0.08;
		return this.basePrice + (taxRate * this.basePrice)
	}

	addAccessories(...accessories: Accessory[]){
		this.accessoryList = '';
		for(var i = 0; i < accessories.length; i++){
			var acc = accessories[i];
			this.accessoryList += acc.accessoryNumber + ' '+ acc.title + '<br />';
		}
	}

	getAccessoryList(): string {
		return this.accessoryList;
	}

	get basePrice(): number {
		return this._basePrice;
	}

	set basePrice(value: number){
		if(value <= 0)
			throw 'Price must be greater than 0'
		this._basePrice = value;
	}

	get engine(){
		return this._engine;
	}

	set engine(value: Engine) {
		if(value == undefined)
			throw 'Please supply an engine';
	}
}


class Truck extends Auto { // now Truck will have all the attributes, properties and methods of class Auto
	bedLength: string;
	fourByFour: boolean;

	constructor(basePrice: number, engine: Engine, make: string, model: string,  bedLength: string, fourByFour: boolean){
		// as this is child class, so it has to call the constructer of parent class by using keyword super
		super(basePrice, engine, make, model);
		this.bedLength = bedLength;
		this.fourByFour = fourByFour;
	}
}

window.onload = function() {
	var truck = new Truck(4000, new Engine(300, 'V8'), 'Chevy', 'Silverrado', 'Long Bed', true);
	truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing package'));
	truck.engine.start((status: boolean, engineType: string)=>{
	alert(engineType + ' was started');
});

};