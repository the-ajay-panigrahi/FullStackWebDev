/*
    1) Constructor Functions: Acts like a blueprint, similar to what the class keyword does.
    2) new: Used to create a new object by calling the constructor.
    3) this: Refers to the current context or object.
    4) throw: Used to throw a custom error or exception.
    5) Error(): The constructor to create a new error object.
*/

function Person(name, age) {
  if (!new.target) {
    throw new Error("Person must be called with new keyword!!");
  }
  this.name = name;
  this.age = age;
  this.describe = function () {
    return `${this.name} is a cool person!!`;
  };
}

let person_0 = Person("Ajay", 20);
// console.log(person_0);

let person_1 = new Person();
// console.log(person_1);

let person_2 = new Person("Ajay", 20);
// console.log(person_2);
// console.log(person_2.describe());

let person_3 = new Person("Ruchika", 16);
// console.log(person_3);
// console.log(person_3.describe);

Person.prototype.sound = function () {
  return `${this.name} makes a lot of sound!!`;
};
// console.log(person_2.sound());
// console.log(person_3.sound());
