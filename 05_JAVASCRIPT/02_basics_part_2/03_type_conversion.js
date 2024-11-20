/*
   There are two types of conversions in javascript :-
       1) Implicit Type Conversion
       2) Explicit Type Conversion
*/

// 1) Implicit Type Conversion
console.log(1 + 2 + "3"); // 33
console.log("1" + 2 + 3); // 123
console.log(true + true); // 2
console.log(null + 1); // 1

// 2) Explicit Type Conversion
console.log(Number("23"), typeof Number("23"));
console.log(Number("23abc"), typeof Number("23abc"));
console.log(Number(null), typeof Number(null));
console.log(Number(undefined), typeof Number(undefined));
console.log(Boolean(123), typeof Boolean(123));
console.log(Boolean(""), typeof Boolean(""));
