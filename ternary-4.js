const prompt= require('prompt-sync')();


let day = prompt("Enter the day of the week: "); 
day === "Saturday" ||day === "Sunday"? console.log("Weekend") : console.log("Weekday");