const prompt= require('prompt-sync')();


let ages = parseInt(prompt("Enter your age: "));
ages < 13? console.log("You are a child") :
   ages < 20? console.log("You are a teenager") :
   ages < 60? console.log("You are an adult") : 
    console.log("You are a senior");