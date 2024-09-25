/*
    Types of Operators in Javascript
    1. Arithmetic Operators
    2. Assignment Operators
    3. Comparison Operators
    4. Logical Operators
    5. Conditional Operators (later)
    6. Bitwise Operators (later)
 */

// 1. Arithmetic Operators
console.log(5 + 5); // 10
console.log(5 - 5); // 0
console.log(5 * 5); // 25
console.log(5 / 5); // 1
console.log(5 % 5); // 0
console.log(2 ** 5); // 32

let num = 5;
console.log(num++); // 5
console.log(num); // 6
console.log(++num); // 7
console.log(num); // 7

num = 5;
console.log(num--); // 5
console.log(num); // 4
console.log(--num); // 3
console.log(num); // 3

// 2. Assignment Operators
let a = 5;
a += 5; // a = a + 5
a -= 5; // a = a - 5
a *= 5; // a = a * 5
a /= 5; // a = a / 5
a %= 5; // a = a % 5
a **= 5; // a = a ** 5

// 3. Comparison Operators
console.log(5 == 5); // true
console.log(5 != 5); // false
console.log(5 > 5); // false
console.log(5 < 5); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true

// 4. Logical Operators
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

/*
    Note: 

       instead of doing things like .... 2 * 3 / 5 % 1 - 22 ** 10
       use parenthesis like .... ((((2 * 3) / (5 % 1)) - 22 )** 10)

       if you avoid the above thing you can ignore operator precedence and operator associativity.

       operator precedence means which operator should be used first.

       operator associativity means which operator should be used first when both operators have same precedence.

       code readability is important and should be given high priority.

*/
