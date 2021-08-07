var person;
person = "Husnain Maqsood";
console.log(person.substring(1,8)); // this will give us Husnain

// person is a string but now we have converted it into object ????
person = {
    name: "Ahmad",
    age: 36
};


console.log(person.substring(1,8)); // this will throw an error that object doesn't have method substring,

//if we don't want user to do this kind of stuff i.e. make a string an object.
// we can use anotations while declaring string person 

// now this will not allow user to create object of person
// var person: string;
// person = "Husnain Maqsood";
// console.log(person.substring(1,8)); // this will give us Husnain

// // person is a string but now we have converted it into object ????
// person = {
//     name: "Ahmad",
//     age: 36
// };
