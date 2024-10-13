/*
 Every programming language has its own way of writing code, with styles such as object-oriented programming, procedural programming, and prototype-based programming.
        => object-oriented programming - class-based programming
        => procedural programming - function-based programming
        => prototype-based programming - object-based programming

 JavaScript is fundamentally a prototype-based programming language. To accommodate programmers familiar with object-oriented languages, it introduced syntactical features like classes and constructors, making it easier for them to build applications. Despite this, it remains prototype-based under the hood.

 Classes are essentially blueprints for creating objects. 
 They are used to create instances of objects. 
 You can create instances or objects from classes, both terms are interchangeable.

 JavaScript is a prototype-based language, it was created as a prototype-based language and will likely remain one.

 It looks like it is a object-oriented programming language because of classes and constructors, but that's just a disguise. Underneath, it's still prototype-based.

  Whenever you create an object or function in JavaScript, a prototype is always present. However, primitive values (like numbers and strings) do not have prototypes in the same way.

 What is a prototype?
  => A prototype is an object associated with every function and object in JavaScript that enables inheritance, allowing objects to inherit properties and methods from one another. It provides additional properties and functionalities for a given data type.
  
 */

//   dunder => __

let lenovo = {
  screen: "HD",
  cpu: 12,
  ram: 16,
};

let dell = {
  screen: "4K",
  cpu: 18,
  __proto__: lenovo, // a bit older way
};

let asus = {
  screen: "8K",
  size: "42 inch",
};

console.log("lenovo", lenovo.__proto__);
console.log("dell", dell.__proto__);
console.log(dell.ram);

Object.setPrototypeOf(asus, lenovo); // a bit modern way
// console.log("asus", asus.__proto__);
console.log("asus", Object.getPrototypeOf(asus));
console.log(asus.ram);
