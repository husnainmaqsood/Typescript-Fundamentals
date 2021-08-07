class Greeter{
    private greeting: string;
    constructor(greeting: string){
        this.greeting = greeting;
    }
    greet(){
        console.log("Hello "+ this.greeting);
    }
}

let greeter = new Greeter("World"); // if we anything except a string, it will throw an error. because we have defined the type will be string
greeter.greet();
