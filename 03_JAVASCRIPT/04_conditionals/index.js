let condition = false;
if (condition) {
  console.log("Hey, I am true!!");
} else {
  console.log("Hey, I am false!!");
}

let age = -5;
if (age > 18 && age < 30) {
  console.log("I am an adult.");
} else if (age >= 30) {
  console.log("I am a mature adult.");
} else if (age < 0) {
  console.log("Invalid age!!!");
} else {
  console.log("Default");
}

// Ternary Operator
3 > 5 ? console.log("True") : console.log("False");
