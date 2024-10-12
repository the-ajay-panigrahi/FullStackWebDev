const firstName = "Ajay";
// console.log(firstName);
// firstName = "Ram"; // TypeError: Assignment to constant variable.
// const firstName = "Aju"; // SyntaxError: Identifier 'firstName' has already been declared

let age = 18;
// console.log(age);
age = 20;
// console.log(age);
// let age = 21; // SyntaxError: Identifier 'age' has already been declared

/*
Prefer not to use var :
    - because of issue in block scope and functional scope.
*/

var randomNumber = 101; // not recommended, old way of declaring variables, used in legacy code bases.
// console.log(randomNumber);
randomNumber = 108;
// console.log(randomNumber);
var randomNumber = 666;
// console.log(randomNumber);

carNumber = 101; // not recommended, we can declare a variable and reserve a memory space without even using let var or const,
// console.log(carNumber);

let nextPm;
// console.log(nextPm);

// console.table([firstName, age, randomNumber, carNumber, nextPm]);
