const prompt= require('prompt-sync')();


let temp = parseInt(prompt("Enter the tempature: "))
temp > 30? console.log("Hot") : console.log("Normal");