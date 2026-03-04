// Basics of Objects
const person = {
    name:"Benaka",
    age:21,
    isStudent : true
};
console.log("Person ",person);
console.log(person.age);
console.log(person["name"]);

//add new property
person.city="Mandya";
console.log(person.city);

//modify property
person.age =20;
console.log(person["age"]);

//delete property
delete person.isStudent;
console.log(person);

//object constructor -- constructor is used to create new objects with new key
const car = new Object();
car.name="Audi";
car.model="A4";
car.year=2026;
console.log(car);
