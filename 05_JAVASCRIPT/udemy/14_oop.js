/*

 OOP - OOP stands for Object-Oriented Programming, a programming paradigm/style that uses objects to organize and structure code, where the concept of objects comes into the picture.
 
 Classes - Classes are blueprints to create objects. They're just syntactic sugar, under the hood, it's all based on prototypes. In JavaScript, everything is an object, so even classes themselves are objects under the hood.

 Inheritance - Inheritance means borrowing functionality from another class. If my dad owns a car, I can borrow it whenever I need. Similarly, in inheritance, I can permanently use functionality from another class.

 Encapsulation - Encapsulation is the process of hiding internal details and exposing only the necessary functionality. It restricts direct access to an object's data to protect it from outside interference.
 
 Abstraction - Abstraction is the process of hiding complex implementation details and showing only the relevant features to the user. It focuses on "what" an object does, rather than "how" it does it.

 */

/* 
    When using a regular JavaScript object like let obj = {} or the below, we can't easily create multiple copies. This issue is solved by using constructor functions.
 */
const userOne = {
  firstName: "Ajay",
  lastName: "Panigrahi",
  birthYear: 2004,
  aim: function () {
    return `Live and let others live. - "${this.firstName} ${this.lastName}"`;
  },
};
// console.log(userOne);
// console.log(userOne.aim());

// Constructor function
function Person(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
}

let ajay = new Person("Ajay", "Panigrahi", 2004);
// console.log(ajay);

// Prototypal chaining
Person.prototype.walk = function () {
  return `${this.firstName} walks.`;
};
// console.log(ajay);
// console.log(ajay.walk());

/*
    Note: When "functions" are placed inside a class, we change the terminology and refer to them as "methods" instead of functions.
*/

class Animal {
  constructor(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
  }

  // No need to prefix with "function" keyword inside a class, it's just syntactic sugar.
  speak() {
    return `${this.name} speaks!!`;
  }
}

// Below is an example of inheritance
class Dog extends Animal {
  sound() {
    return `${this.name} does bow bow!!`;
  }
}

let doggy = new Dog("German Shepherd", "Buddy", 2);
// console.log(doggy);
// console.log(doggy.speak());
// console.log(doggy.sound());

// Encapsulation
class BankAccount {
  #balance = 12345; // private variable

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return `$${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.balance); // undefined
// console.log(account.#balance); // not accessible outside the class
// console.log(account.getBalance());
// account.deposit(12345);
// console.log(account.getBalance());

// Abstraction
class TeaMaker {
  start() {
    // complex DB calls
    // complex logic
    console.log("Starting the tea maker....");
  }

  ingredients() {
    // complex logic
    console.log("Calculating ingredients...");
  }

  teaProportion() {
    // complex logic
    console.log("Calculating tea proportion...");
  }

  brew() {
    // complex logic
    console.log("Brewing the tea...");
  }

  finish() {
    // complex logic
    console.log("Finishing the tea...");
  }

  makeTea() {
    this.start();
    this.ingredients();
    this.teaProportion();
    this.brew();
    this.finish();
  }
}

let masalaChai = new TeaMaker();
masalaChai.makeTea();
