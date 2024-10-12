"use strict"; // enable's strict mode, treat all JS code as newer version

/*
    ECMAScript : 
     - It is a standard for scripting languages.
     - It is best known as a JavaScript standard.
     - ECMAScript is a specification on which JavaScript is based.
     - JavaScript is an implementation of the ECMAScript standard.

    Note: A scripting language is a type of programming language that does not require explicit compilation before execution. Instead, the instructions are interpreted individually at runtime.
*/

// alert("Hello World"); // alert is not defined, we are using nodejs, not browser

/*
console.log(2
    +

                3
); 

Dont do the above circus, code readability should be high.
*/

/*
   JavaScript is a dynamically typed language or loosely typed language.
   It means we do not need to explicitly declare the type of a variable before using it.
   It means the data type of a variable can be changed later on. 

   For example:
            let x = 10;
                x = "Ajay";
                x = true;
                x = null;

*/

/*
  Based on how data is stored and accessed from the memory, data types can be divided into two categories:
      - Primitive Data Types (Call by Value OR Pass by Value) - copy
      - Non-Primitive / Reference Data Types (Call by Reference OR Pass by Reference) - reference/ address
*/

/*  Primitive Data Types:
    1) String : "Hello World"
    2) Number : 10, 2.5, -4
    3) BigInt : 1234567890123456789012345678901234567890n - large numbers
    4) Boolean : true/false
    5) Null : standalone value
    6) Undefined : not yet defined
    7) Symbol : unique identifier

    Non-Primitive Data Types:
    8) Object : {}
       - Array : []
       - function : () => {}
*/

let firstName = "Ajay";
let age = 20;
let isLoggedIn = false;

console.log("Ajay", typeof "Ajay"); // string
console.log(10, typeof 10); // number
console.log(true, typeof true); // boolean
console.log(undefined, typeof undefined); // undefined
console.log(null, typeof null); // object - Interview Question
console.log(Symbol("Ajay"), typeof Symbol("Ajay")); // symbol
console.log(
  1234567890123456789012345678901234567890n,
  typeof 1234567890123456789012345678901234567890n
); // bigint
console.log({}, typeof {}); // object