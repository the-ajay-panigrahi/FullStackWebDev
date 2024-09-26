// Number
let balance = 169000;
console.log(balance, typeof balance);
let anotherBalance = new Number(78900);
console.log(anotherBalance, typeof anotherBalance);
console.log(anotherBalance.valueOf());

// Boolean
let isActive = true;
console.log(isActive, typeof isActive);
let isReallyActive = new Boolean(true); // not recommended
console.log(isReallyActive, typeof isReallyActive);
console.log(isReallyActive.valueOf());

// Null
let empty = null;
console.log(empty, typeof empty);

// Undefined
let state;
console.log(state, typeof state);
let city = undefined;
console.log(city, typeof city);

// String
let firstName = "Ajay"; // "" quotes
console.log(firstName, typeof firstName);
let lastName = 'Panigrahi'; // '' quotes
console.log(lastName, typeof lastName);
// let fullName = firstName + " " + lastName;
// console.log(fullName, typeof fullName);
let fullName = `${firstName} ${lastName}`; // string interpolation or template string or template literal
console.log(fullName, typeof fullName);

// BigInt
let largeNumber = BigInt(12345678);
console.log(largeNumber, typeof largeNumber);
let anotherLargeNumber = 12345678901234567890n;
console.log(anotherLargeNumber, typeof anotherLargeNumber);

// Symbol
let id = Symbol("id");
console.log(id, typeof id);
let anotherId = Symbol("id");
console.log(anotherId, typeof anotherId);
console.log(id == anotherId);
console.log(id === anotherId);
