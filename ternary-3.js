const prompt= require('prompt-sync')();


let tPrice
let age = parseInt(prompt("Enter your age: "));
age < 12?  tPrice = "Your ticket is $8": tPrice = "Your ticket is $15";
console.log(tPrice);