/*============================================; 
Title: dawson-assignment-3.4; 
Author: Professor Krasso ; 
Date: 09 December 2019; 
Modified By: Tisa Dawson; 
Description: Loops;
===========================================*/ 

/**
* Description: Returns a random integer value
*/

// Create a variable and assign it a value between 1 and 10
// Take the functions you wrote in exercise 3.2 (match, logMismatch and logMatch) and copy them to this week's assignment.
// Create a for loop with 10 iterations and inside the body of the for loop create a local variable and assign it a random number 
// between 1 and 10 (use the randomNumber function I have provided in the starter code)
// During each iteration of the for loop the random number should be reassigned a new random value (this means the placement of the 
// variable should be inside the for loop).
// Next, create an if...else statement and use the match function to test if the variable in step one matches the random number 
// created in step 3.  For true, call the logMatch function using the same two values.  For false, call the logMismatch function using 
// the same two values.  If it is not obvious by now, you are basically wrapping a for loop around the work you did in exercise 3.2.  
// And, instead of using multiple if...else statements and test variables you will be using a for loop to generate the test variables 
// and one if..else statement to check the generated values. 

const header = require('../dawson-header.js');

console.log(header.display("Tisa", "Dawson", "Assignment 3.4"));

function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
}

var number;
let getRandomNumber = randomNumber();

for (number = 0; number < 10; number++) { 
    number = 8;
    getRandomNumber = Math.floor((Math.random() * 10) + 1);
    match(number, getRandomNumber);
} 

 function match(number, getRandomNumber) {

    if (number = getRandomNumber) {
        logMatch(number, getRandomNumber); //does match
    }

    else {
        logMismatch(number, getRandomNumber); //does not match
    }

}

function logMismatch(number, getRandomNumber) {
    console.log(number + " does not match " + getRandomNumber + "!");  //false
}

function logMatch(number, getRandomNumber) {
    console.log(number + " does match " + getRandomNumber + "!");  //true
}