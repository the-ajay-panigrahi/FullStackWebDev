const userOne = {
  name: "Ajay",
  age: 20,
  "full name": "Ajay Panigrahi",
};

console.log(userOne);
console.log(typeof userOne);

userOne.name = "Aju";
userOne.isLoggedIn = false;
console.log(userOne);

console.log(userOne.name);
console.log(userOne["full name"]);

const userTwo = userOne;

console.log(userOne);
console.log(userTwo);

userTwo.name = "Ram";
userTwo.age = 333;
userTwo["full name"] = "Ram Rajya";
userTwo.isLoggedIn = true;

console.log(userOne);
console.log(userTwo);

const bhagwans = ["Ram", "Shiv", "Vishnu", "Krishna", "Narayan", "Hanuman"];

console.log(bhagwans);

console.log(typeof bhagwans);

console.log(bhagwans[0]);
console.log(bhagwans[1]);
console.log(bhagwans[2]);
console.log(bhagwans[3]);
console.log(bhagwans[4]);
console.log(bhagwans[5]);
console.log(bhagwans[6]);

console.log(bhagwans.length);

console.log(bhagwans);
bhagwans[0] = "Jai Shree Ram";
console.log(bhagwans);

console.log(bhagwans[0]);
console.log(bhagwans[1]);
console.log(bhagwans[2]);
console.log(bhagwans[3]);
console.log(bhagwans[4]);
console.log(bhagwans[5]);
console.log(bhagwans[6]);
console.log(bhagwans.length);

let anotherBhagwans = bhagwans;

console.log("-----------------------");

console.log(bhagwans);
console.log(anotherBhagwans);

anotherBhagwans[0] = null;
anotherBhagwans[1] = null;
anotherBhagwans[2] = null;
anotherBhagwans[3] = null;
anotherBhagwans[4] = null;
anotherBhagwans[5] = null;

console.log(bhagwans);
console.log(anotherBhagwans);

console.log("-----------------------");
