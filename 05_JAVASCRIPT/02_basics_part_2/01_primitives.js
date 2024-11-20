/*
Primitive Data Types :-
   1. Number
   2. BigInt
   3. Boolean
   4. String
   5. Null
   6. Undefined
   7. Symbol
*/

// 1. Number
let num = 10;
// console.log(num, typeof num);
let anotherNum = new Number(10);
// console.log(anotherNum);
// console.log(anotherNum.valueOf(), typeof anotherNum);

// 2. BigInt
let bigNum = 12345678910111213n;
// console.log(bigNum, typeof bigNum);
let anotherBigNum = BigInt(12345678910111213); // don't use "new" keyword(With BigInt/ Not allowed)
// console.log(anotherBigNum, typeof anotherBigNum);

// 3. Boolean
let isLoggedIn = false;
// console.log(isLoggedIn, typeof isLoggedIn);
let anotherIsLoggedIn = true;
// console.log(anotherIsLoggedIn, typeof anotherIsLoggedIn);

// 4. String
let firstName = "Ajay";
// console.log(firstName, typeof firstName);
// console.log("Hello" + " " + firstName + "!!");
// console.log(`Hello ${firstName}!!`); // String Interpolation

// 5. Null
let temperature = null;
// console.log(temperature, typeof temperature); // typeof null => object

// 6. Undefined
let state;
let city = undefined;
// console.log(state, typeof state);
// console.log(city, typeof city);

// 7. Symbol
let uniqueOne = Symbol("Ajay");
let uniqueTwo = Symbol("Ajay");
console.log(uniqueOne, typeof uniqueOne);
console.log(uniqueTwo, typeof uniqueTwo);
console.log(uniqueOne == uniqueTwo);
console.log(uniqueOne === uniqueTwo);
