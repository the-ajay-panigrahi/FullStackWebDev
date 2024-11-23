// Arithmetic operations
// console.log(2 + 2); // 4
// console.log(2 - 2); // 0
// console.log(2 * 2); // 4
// console.log(2 / 2); // 1
// console.log(2 ** 2); // 4
// console.log(2 % 2); // 0

let a = 2;
// console.log(a++); // 2
// console.log(++a); // 4
// console.log(a--); // 4
// console.log(--a); // 2

// Comparison operations
// console.log(2 == "2"); // true
// console.log(2 === "2"); // false
// console.log(2 != 2); // false
// console.log(2 !== "2"); // true
// console.log(2 > 2); // false
// console.log(2 < 2); // false
// console.log(2 >= 2); // true
// console.log(2 <= 2); // true

// Logical operations
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false
// console.log(!true); // false
// console.log(!false); // true

// Assignment operations
let x = 2;
console.log(x); // 2
x += 2;
console.log(x); // 4
x -= 2;
console.log(x); // 2
x *= 2;
console.log(x); // 4
x /= 2;
console.log(x); // 2
x **= 2;
console.log(x); // 4
x %= 2;
console.log(x); // 0

// let calculate = 2 * 3 + 5 % 6 / 2 + 8; // bad practice

let calculate = (2 * ((3 + 5) % 6)) / (2 + 8); // good practice
console.log(calculate);

/*
   Instead of writing messy code like this :-
   let calculate = 2 * 3 + 5 % 6 / 2 + 8;
   you would require operator precedence table to understand the order of operations.

   We can write it like this :-
   let calculate = (2 * ((3 + 5) % 6)) / (2 + 8);
   use parentheses to make the code more readable and easy to understand and avoid the need of operators precedence table.
*/
