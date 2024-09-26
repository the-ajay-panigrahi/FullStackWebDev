const username = {
  firstName: "Ajay",
  lastName: "Panigrahi",
  "full name": "Ajay Panigrahi",
  isLoggedIn: true,
};

console.log(username);
console.log(typeof username);

username.firstName = "Mr. Ajay";
username.age = 20;

console.log(username);

console.log(username["full name"]);
console.log(username.age);
console.log(username["lastName"]);

// Date => object
let today = new Date();
console.log(today);
console.log(typeof today);
console.log(today.toLocaleString());

// Array => object
let colors = ["red", "green", "blue"];
console.log(colors);
console.log(typeof colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors.length);
