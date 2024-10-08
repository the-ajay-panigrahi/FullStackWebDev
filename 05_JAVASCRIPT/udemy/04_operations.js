let a = 2;
let b = 3;

console.log(a + b); // 5
console.log(a - b); // -1
console.log(a * b); // 6
console.log(a / b); // 0.6666666666666666
console.log(a % b); // 2
console.log(a ** b); // 8

console.log(a++); // 2
console.log(++a); // 4
console.log(--a); // 3
console.log(a--); // 3

a = 2;
b = 3;

console.log(a == b); // false
console.log(a != b); // true
console.log(a === b); // false
console.log(a !== b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true

console.log(!true); // false
console.log(!false); // true

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

a = 3;
console.log(a); // 3

a += 1;
console.log(a); // 4

a -= 1;
console.log(a); // 3

a *= 1;
console.log(a); // 3

a /= 2;
console.log(a); // 1.5

a = 5;
a %= 2;
console.log(a); // 1

a = 3;
a **= 3;
console.log(a); // 27

/*

 Operator Precedence: It means the order in which the operators are executed.

 Operator Associativity: It means the order in which the operators are executed when both the operators have the same precedence.

 Instead of doing this circus:
    a = 2 * 3 + 1 - 4 / 2 % 6 ** 2;
    use parenthesis(it makes the code more readable): 
    a = ((2 * 3) + (1 - ((4 / 2) % (6 ** 2))));
    a = (6 + (1 - (2 % 36)));
    a = (6 + (1 - 2));
    a = (6 + (-1));
    a = (6 - 1);
    a = 5;

*/

