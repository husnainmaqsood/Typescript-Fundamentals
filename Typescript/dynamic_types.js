var person;
person = "Husnain Maqsood";
console.log(person.substring(1, 8)); // this will give us Husnain
person = {
    name: "Ahmad",
    age: 36
};
console.log(person.substring(1, 8)); // this will throw an error that object doesn't have method substring
