/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}!!`;
}
// console.log(makeTea("Masala Chai"));
let teaOrder = makeTea("Garam Chai");
// console.log(teaOrder);

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}!`;
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("Green Tea");
// console.log(orderConfirmation);

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/
let calculateTotal = (price, quantity) => price * quantity;
const totalCost = calculateTotal(250, 4);
// console.log(totalCost);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function makeTea(teaType) {
  return `${teaType} is almost ready!!`;
}
function processTeaOrder(teaFn) {
  return teaFn("earl grey");
}
const order = processTeaOrder(makeTea);
// console.log(order);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
function createTeaMaker(person) {
  let age = 20;
  return function (teaType) {
    return `Making ${teaType} for ${person} of age - ${age}.`;
  };
}
let teaMaker = createTeaMaker("ajay");
let result = teaMaker("green tea");
console.log(result);
