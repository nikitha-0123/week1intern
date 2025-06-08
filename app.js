console.log("Hello from Node.js!");
// variables and functions
let name = "nikitha";
function greet(user) {
  return "Hello, " + user + "!";
}
console.log(greet(name));
//array

let fruits = ["apple", "banana", "cherry"];

console.log("First fruit:", fruits[0]);

fruits.push("orange"); 
console.log("All fruits:", fruits);

fruits.pop();
console.log("After pop:", fruits);