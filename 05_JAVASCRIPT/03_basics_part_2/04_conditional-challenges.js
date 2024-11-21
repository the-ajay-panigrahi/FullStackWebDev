// Checking if a number is greater than another number:
let numberOne = 200;
let numberTwo = 50;
if (numberOne > numberTwo) {
  // console.log(`${numberOne} is greater than ${numberTwo}`);
} else {
  console.log(`${numberTwo} is greater than ${numberOne}`);
}

// Checking if a string is equal to another string:
let myName = "Ajay";
let friendsName = "Shree Ram";
if (myName !== friendsName) {
  // console.log(`${myName} is not equal to ${friendsName}`);
} else {
  console.log(`${myName} is equal to ${friendsName}`);
}

//Checking if a variable is a number or not:
let randomValue = 23;
if (typeof randomValue === "number") {
  // console.log(`${randomValue} is a ${typeof randomValue}`);
} else {
  console.log(`${randomValue} is not a number, its a ${typeof randomValue}`);
}

//Checking if a boolean value is true or false:
let isLoggedIn = true;
if (isLoggedIn === true) {
  // console.log("User IS logged in");
} else {
  console.log("User IS NOT logged in");
}

// Checking if an array is empty or not:
let devas = [
  "Shree Ram",
  "Shree Krishna",
  "Shree Ganesha",
  "Mahadeva",
  "Narayan",
];
if (devas.length === 0) {
  console.log("Array is empty");
} else {
  // console.log(`Array IS NOT empty, its of size: ${devas.length}`);
}
