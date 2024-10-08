// console.log("This is a single line comment");

/*
This is
a
multi
line
comment
*/

/*
    1) String : "Hello World"
    2) Number : 10, 2.5, -4
    3) BigInt : 1234567890123456789012345678901234567890n - large numbers
    4) Boolean : true/false
    5) Null : standalone value
    6) Undefined : not yet defined
    7) Symbol : unique identifier
    8) Object : {}
       - Array : []
       - function : () => {}
*/

var firstName = "Ajay"; // not recommended, old way of declaring variables - use let
console.log(firstName);

let lastName = "Panigrahi"; // string
console.log(lastName);

let age = 20; // number
console.log(age);

let isMarried = false; // boolean
console.log(isMarried);

let teaTypes = [
  "green tea",
  "black tea",
  "jasmine tea",
  "oolong tea",
  "orange tea",
]; // array(object)
console.log(teaTypes);

let person = {
  firstName: "Ajay",
  lastName: "Panigrahi",
  age: 20,
  isMarried: false,
}; // object
console.log(person);
