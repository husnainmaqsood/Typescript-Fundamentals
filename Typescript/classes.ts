// class is just a container
// we put things related to that class
// fields(variables), constructors, properties(act as fileter), functions

// defining a class
// class Car{
//     // Fields
    
//     // Constructor

//     // Properties

//     // Functions
// }

// class members are public by default

class Car{
    engine: string; // field

    // constructor
    constructor(engine: string){
        this.engine = engine;
    }
}

class Car2{
    // if we write this way, engine field of type string will be automatically created and assignment like in above contructor will be done. i.e. above class constructor code and this code are same
    constructor(public engine: string){}
}