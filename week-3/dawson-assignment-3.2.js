/*============================================; 
Title: dawson-assignment-3.2; 
Author: Professor Krasso ; 
Date: 09 December 2019; 
Modified By: Tisa Dawson; 
Description: Pattern Matching Functions;
===========================================*/ 

/**
* Description: Create a simple JavaScript program using if...else statements.
*/

const header = require('../dawson-header.js');

console.log(header.display("Tisa", "Dawson", "Week 3"));
    
// Create a function called match with two parameters, compare the parameters using the equality operation (===).  If they match return true if they do not match return false. 

function match(b1, b2) {

    var b1 = "Bike";
    var b2 = "Bike";
    var cr = "Car";
    var tr = "Truck";
    var fr = "Four";
    var th = "Three";

    if (b1 === b2) {
        return true;
        logMatch();
    }
    else {
        return false;
        logMismatch();
        }
}

// Create a function called logMismatch with two parameters, create a string message with the two parameters saying they do not match.  Use the parameters as the values you display in the string message. 
 
function logMismatch(b1, b2) {
    console.log('\n' + b1 + " and" + b2  +" do not match!" + '\n');
}

// Create a function called logMatch with two parameters, create a string message with the two parameters saying they do match.  Use the parameters as the values you display in the string message.
 
function logMatch(b1, b2) {
        console.log('\n' + b1 + " and" + b2  +" match!" + '\n');
}

match();


