// when we want to export one object only

export default class Student {
    constructor(private name: string, private rollNo: number){

    }
    print() {
        console.log(this.name + "'s Roll no is "+ this.rollNo);
    }
}