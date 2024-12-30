alert("Radhe Radhe!");
console.log("Hello World");

var a = prompt("Enter a number: ");
console.log("You entered " + a);

var ans = confirm("Do you love coding?");

if (ans) {
  console.log("You are my FRIEND!!");
  document.body.style.backgroundColor = "yellow";
  document.title = "Dost";
} else {
  console.log("You are my ENEMY!!");
  document.body.style.backgroundColor = "red";
  document.title = "Dushman";
}
