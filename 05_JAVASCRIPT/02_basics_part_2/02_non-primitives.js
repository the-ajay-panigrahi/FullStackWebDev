/*
Non Primitive Data Types :-
    1. Objects
    2. Arrays
    3. Functions
*/

// 1. Objects
let sampleObject = {}; // empty object
// console.log(sampleObject);
// console.log(typeof sampleObject);

let allUsers = {
  firstName: "Ajay",
  lastName: "Panigrahi",
};
// console.log(allUsers);
// console.log(typeof allUsers);
allUsers.age = 20;
// console.log(allUsers.age);
allUsers["full name"] = "Ajay B Panigrahi";
// console.log(allUsers);

const anotherObject = { userName: "Arjun" };
// console.log(anotherObject);
anotherObject.userName = "Krishna";
// console.log(anotherObject);

// anotherObject = {}; // throw an error

let userOne = new Object({ age: 21, isActive: false });
// console.log(userOne);
// console.log(typeof userOne);

// 2. Arrays
let randomValues = [
  21,
  true,
  0,
  null,
  "Ajay",
  { lastName: "Panigrahi" },
  [45, undefined],
  "sample",
];
// console.log(randomValues);
// console.log(typeof randomValues);
// console.log(randomValues[4]);

// 3. Functions
function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}

console.log(addTwoNumbers(2, 11));
console.log(addTwoNumbers(90, 99));
