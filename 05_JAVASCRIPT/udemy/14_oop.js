/*

 OOP - OOP stands for Object-Oriented Programming, a programming paradigm/style that uses objects to organize and structure code, where the concept of objects comes into the picture.
 
 Classes - Classes are blueprints to create objects. They're just syntactic sugar, under the hood, it's all based on prototypes. In JavaScript, everything is an object, so even classes themselves are objects under the hood.

 Inheritance - Inheritance means borrowing functionality from another class. If my dad owns a car, I can borrow it whenever I need. Similarly, in inheritance, I can permanently use functionality from another class.

 Encapsulation - Encapsulation is the process of hiding internal details and exposing only the necessary functionality. It restricts direct access to an object's data to protect it from outside interference.
 
 Abstraction - Abstraction is the process of hiding complex implementation details and showing only the relevant features to the user. It focuses on "what" an object does, rather than "how" it does it.

 Polymorphism - Polymorphism is the ability of an object to take on multiple forms.

 Static Methods - Static methods are methods that are not tied to any specific object. They can be called directly on the class without creating an instance. Static methods can only be called by the class itself, not by objects. 

 Static Properties - Just like static methods, static properties are associated with the class itself, not with instances (objects) of the class. They can be accessed directly from the class, not from an instance.

 Getters & Setters - Getters and Setters in JavaScript are special methods that allow you to define how the properties of an object are accessed and modified. They provide a way to control the behavior when reading or writing to an object's properties.
  
    Getters:
    A getter is a method that gets the value of a property. It is defined using the get keyword.

    Setters:
    A setter is a method that sets the value of a property. It is defined using the set keyword

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
// masalaChai.makeTea();

// Polymorphism
class Bird {
  fly() {
    console.log("I can fly.......");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("I can't fly because I swim........");
  }
}

let sparrow = new Bird();
let penguin = new Penguin();
/*
    This is exactly what polymorphism is, the method name is the same, but its behavior differs.
*/
// sparrow.fly();
// penguin.fly();

// Static Properties and Methods
class Calculator {
  static myStaticProperty = "I am static property!!";
  static add(num1, num2) {
    console.log(num1 + num2);
  }
}
let sampleCalculation = new Calculator();
// console.log(sampleCalculation.myStaticProperty);
// sampleCalculation.add(2, 3);

// console.log(Calculator.myStaticProperty);
// Calculator.add(4, 5);

// Getters and Setters
class Employee {
  #salary;
  constructor(firstName, age, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative!");
    }
    this.firstName = firstName;
    this.age = age;
    this.#salary = salary;
  }
  get salary() {
    // return this.#salary;
    throw new Error("You cannot access the salary!!");
  }
  set salary(value) {
    if (value < 0) {
      throw new Error("Invalid Salary");
    }
    this.#salary = value;
  }
}

let emp = new Employee("Ajay", 20, 85000);
// console.log(emp);
// console.log(emp.salary); // error
