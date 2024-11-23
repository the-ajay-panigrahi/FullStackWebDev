/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
const countdown = [];
let iterator = 5;
while (iterator >= 1) {
  countdown.push(iterator);
  iterator--;
}
// console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
let tea;
const teaCollection = [];
// do {
//   tea = prompt(
//     `Enter your favorite tea type until you want, if not then enter "stop"`
//   );
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
// console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
const numbers = [2, 4, 6];
const multipliedNumbers = [];
for (let index = 0; index < numbers.length; index++) {
  multipliedNumbers.push(numbers[index] * 2);
}
// console.log(numbers);
// console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
const cities = ["Paris", "New York", "Tokyo", "London"];
const cityList = [];
for (let index = 0; index < cities.length; index++) {
  const myCity = cities[index];
  cityList.push(myCity);
}
// console.log(cities);
// console.log(cityList);
