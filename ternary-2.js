const prompt= require('prompt-sync')();


let pAmount = parseInt(prompt("Enter your total: "));
pAmount >= 100? console.log("You are eligible for a 10% discount") : console.log("Your are not eligible for the 10% discount");