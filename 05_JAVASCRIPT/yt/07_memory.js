/*
   There are two types of memory:
   - Stack Memory(Primitive) => copy
   - Heap Memory(Non-Primitive) => reference
*/

// Stack Memory(Primitive)
let myName = "Ram";
let yourName = myName;
console.log(myName, yourName);
myName = "Ajay";
console.log(myName, yourName);

// Heap Memory(Non-Primitive)
let userOne = {
  name: "Ajay",
  age: 20,
};
let userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = "infinite";
console.log(userOne, userTwo);
