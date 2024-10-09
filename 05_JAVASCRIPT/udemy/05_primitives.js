let firstName = "Ajay";
let lastName = "Panigrahi";
let age = 20;
let isMarried = false;
let temperature = null;
let state;
let largeNumber = 1234567890123456789012345678901234567890n;
let uniqueId = Symbol("Ajay");
let anotherId = Symbol("Ajay");
console.log(uniqueId === anotherId);
console.log(uniqueId, anotherId);

console.log(
  typeof firstName,
  typeof lastName,
  typeof age,
  typeof isMarried,
  typeof temperature,
  typeof state,
  typeof largeNumber
);

let num1 = 101;
let num2 = num1;

console.log(num1, num2);
num1 = 0;
console.log(num1, num2);
