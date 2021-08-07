
// interfaces are only for declaration, not for the implementation


interface IEngine {
	// this means that start function will take a callback function as a parameter and that callback function will take a boolean and a string as a parameter. Both callback function and start function will return nothing so voids are there.
	start(callback: (startStatus: boolean, engineType: string) => void) : void;
	stop(callback: (stopStatus: boolean, engineType: string) => void) : void;
}

interface IAutoOptions {
	basePrice: number;
	engine: IEngine;
	state: string;
	make: string;
	model: string;
	year: number;
}
// an interface can inherit other interface and a class can implement interface, if a class do so , then class have to implement all its mandatory methods.
interface ITruckOptions extends IAutoOptions {
	bedLength: string;
	fourByFour: boolean;
}


class Engine implements IEngine {
	constructor(public horsePower: number, public engineType: string){

	}

	start(callback: (startStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}

	stop(callback: (stopStatus: boolean, engineType: string) => void){
		window.setTimeout(() =>{
			callback(true, this.engineType);
		}, 1000);
	}
}

class CustomEngine implements IEngine {
	start(callback: (startStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, 'Custom Engine');
		}, 1000);
	}

	stop(callback: (stopStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, 'Custom Engine');
		}, 1000);
	}
}

class Accessory {
	constructor(public accessoryNumber: number, public title: string){

	}
}

class Auto {
	private _basePrice: number;
	private _engine:  IEngine;
	state: string;
	make: string;
	model: string;
	year: number;
	accessoryList: string;

	constructor(options: IAutoOptions) { // interface has made our code cleaner here
		this.engine = options.engine;
		this.basePrice = options.basePrice;
		this.state = options.state;
		this.make = options.make;
		this.model = options.model;
		this.year = options.year;
	}

	calculateTotal() : number {
		var taxRate = 0.08;
		return this.basePrice + (taxRate * this.basePrice);
	}

	addAccessoryes(...accessories: Accessory[]) {
		this.accessoryList = '';
		for (var i= 0; i< accessories.length; i++) {
			var ac = accessories[i];
			this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
		}
	}

	getAccessoryList(): string {
		return this.accessoryList;
	}

	get basePrice(): number {
		return this._basePrice;
	}

	set basePrice(basePrice: number){
		if(basePrice <= 0)
			throw 'Price must be greater than 0';
		this._basePrice = basePrice;
	}

	get engine(): IEngine{
		return this._engine;
	}

	set engine(value: IEngine){
		if(value == undefined)
			throw 'Please supply an engine';
		this.engine = value;
	}
}


class Truck extends Auto {
	bedLength: string;
	fourByFour: boolean;

	constructor(options: ITruckOptions){
		super(options);
		this.bedLength = options.bedLength;
		this.fourByFour = options.fourByFour;
	}
}

window.onload = function() {
	var truck = new Truck ({
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