export class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number){
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    print(): void {
        console.log(this.name + " is "+ this.age  + " years old");
    }

};


