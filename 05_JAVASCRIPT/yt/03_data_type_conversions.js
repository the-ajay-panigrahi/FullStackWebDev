// Number Conversion
let firstName = "Ajay";
// console.log(firstName, typeof firstName);
let valueInNumber = Number(firstName);
// console.log(valueInNumber, typeof valueInNumber);

firstName = "101";
// console.log(firstName, typeof firstName);
valueInNumber = Number(firstName);
// console.log(valueInNumber, typeof valueInNumber);

let sampleVar = null;
// console.log(sampleVar, typeof sampleVar);
valueInNumber = Number(sampleVar);
// console.log(valueInNumber, typeof valueInNumber);

sampleVar = undefined;
// console.log(sampleVar, typeof sampleVar);
valueInNumber = Number(sampleVar);
// console.log(valueInNumber, typeof valueInNumber);

sampleVar = true;
// console.log(sampleVar, typeof sampleVar);
valueInNumber = Number(sampleVar);
// console.log(valueInNumber, typeof valueInNumber);

/* 
    Observations:
        "Ajay" => NaN
        "101" => 101
        null => 0
        undefined => NaN
        true => 1
        false => 0
*/

// String Conversion
let someNumber = 101;
// console.log(someNumber, typeof someNumber);
let someString = String(someNumber);
// console.log(someString, typeof someString);

someNumber = null;
// console.log(someNumber, typeof someNumber);
someString = String(someNumber);
// console.log(someString, typeof someString);

someNumber = undefined;
// console.log(someNumber, typeof someNumber);
someString = String(someNumber);
// console.log(someString, typeof someString);

/*
    Observations:
        101 => "101"
        null => "null"
        undefined => "undefined"
*/

// Boolean Conversion
let isLoggedIn = 1;
// console.log(isLoggedIn, typeof isLoggedIn);
let valueInBoolean = Boolean(isLoggedIn);
// console.log(valueInBoolean, typeof valueInBoolean);

isLoggedIn = null;
// console.log(isLoggedIn, typeof isLoggedIn);
valueInBoolean = Boolean(isLoggedIn);
// console.log(valueInBoolean, typeof valueInBoolean);

isLoggedIn = undefined;
// console.log(isLoggedIn, typeof isLoggedIn);
valueInBoolean = Boolean(isLoggedIn);
// console.log(valueInBoolean, typeof valueInBoolean);

isLoggedIn = "";
// console.log(isLoggedIn, typeof isLoggedIn);
valueInBoolean = Boolean(isLoggedIn);
// console.log(valueInBoolean, typeof valueInBoolean);

isLoggedIn = "Ajay";
// console.log(isLoggedIn, typeof isLoggedIn);
valueInBoolean = Boolean(isLoggedIn);
// console.log(valueInBoolean, typeof valueInBoolean);
/*
    Observations:
        1 => true
        null => false
        undefined => false
        "" => false
        "Ajay" => true
*/
