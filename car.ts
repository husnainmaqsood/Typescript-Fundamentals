class Car{
    // by default every attribute or a method is public
    engine: string;
    constructor(engine:string){
        this.engine = engine;
    }

    start(){
        console.log(this.engine+ " started");
    }

    stop(){
        console.log(this.engine+ " stopped");
    }
}

let car = new Car("V8");
car.start();
car.stop();