var firstName = "Ajay"; // old way of declaring variables, not recommended
let middleName = "Bata Krushna"; // new way of declaring variables
const lastName = "Panigrahi"; // new way of declaring constants
// console.log(firstName, middleName, lastName);

var sampleVariableOne = 101;
// console.log(sampleVariableOne);
sampleVariableOne = 102;
// console.log(sampleVariableOne);
var sampleVariableOne = 103;
// console.log(sampleVariableOne);
/*

 I can redeclare and reassign values to a variable declared using var keyword.

 Dont use var keyword to declare variables because of its scoping issues.

 Use let and const keywords to declare variables and constants.

*/

let sampleVariableTwo = 201;
console.log(sampleVariableTwo);
sampleVariableTwo = 202;
console.log(sampleVariableTwo);
// let sampleVariableTwo = 203; // will throw error
/*

I can reassign values to a variable declared using let keyword.

I cannot redeclare a variable declared using let keyword.

*/

const sampleVariableThree = 301;
console.log(sampleVariableThree);
// sampleVariableThree = 302; // will throw error
/*
I cannot reassign or redeclare a constant declared using const keyword.
*/