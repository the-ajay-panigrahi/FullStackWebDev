// Function
function sayRam() {
  console.log("Jai Shree Ram!");
}

// sayRam();
// sayRam();
// sayRam();
// sayRam();

function sum(a, b, c = 3) {
  //   console.log(a + b + c);
  return a + b + c;
}

// sum(1, 3);
// sum(1, 3, 1);

let result = sum(5, 5);
// console.log(result);

// Arrow functions

let demoFunc = (x, y) => {
  console.log("I am an arrow function " + x + " " + y);
};

// demoFunc(2, 4);
// demoFunc(5, 21);
// demoFunc();

let anotherDemoFunc = demoFunc;
// anotherDemoFunc(0, 55);
