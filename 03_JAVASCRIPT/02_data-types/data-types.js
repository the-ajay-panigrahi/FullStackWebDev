// Two types of data: 1) Primitive 2) Non-Primitive

/*
   Primitive Data Types(Basic data types):
     1) Null - Empty
     2) Number - 2, -6, 9.33
     3) String - '', "", `` -> Sequence of characters
     4) Symbol - Uniqueness
     5) Boolean - true / false
     6) BigInt - Large numbers -> 353464574575
     7) Undefined - declared but not initialized

   Non Primitive Data Types(adv / user defined data types):
     1) Object - Arrays, Functions, Objects

*/

let firstName = "Ajay";
let age = 20;
let phoneNumber = 9876543210n;
let isLoggedIn = false;
let sampleSymbol = Symbol("1234");
let anotherSampleSymbol = Symbol("1234");
let state;
let temperature = null;

console.table([
  firstName,
  age,
  phoneNumber,
  isLoggedIn,
  sampleSymbol,
  anotherSampleSymbol,
  state,
  temperature,
]);

console.table([
  typeof firstName,
  typeof age,
  typeof phoneNumber,
  typeof isLoggedIn,
  typeof sampleSymbol,
  typeof anotherSampleSymbol,
  typeof state,
  typeof temperature,
]);

console.log(sampleSymbol == anotherSampleSymbol);
console.log(sampleSymbol === anotherSampleSymbol);

console.log(undefined, typeof undefined);
console.log(null, typeof null);

let userObj = {
  firstName: "Ajay",
  lastName: "Panigrahi",
  "full name": "Ajay B Panigrahi",
  isMarried: false,
};

console.log(userObj);
userObj.age = 20;
console.log(userObj);
console.log(userObj.lastName);
console.log(userObj["full name"]);
