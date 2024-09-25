// This is a single line comment

/*
This is a multi
line
comment
*/

/*
    Strings
    Numbers
    Booleans
    Null
    Undefined
    BigInt
    Symbol
    Objects(Arrays)
*/

var score = 100; // old way of declaring variables
console.log(score);

/*
 Don't use 'var' because it is old and not recommended.
 It has block scope issues and function scope issues.
*/

let newScore = 201;
console.log(newScore);

console.log(score, newScore);
console.table([score, newScore]);
