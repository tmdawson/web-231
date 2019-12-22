/*============================================; 
Title: dawson-assignment-4.3; 
Author: Professor Krasso ; 
Date: 09 December 2019; 
Modified By: Tisa Dawson; 
Description: Arrays;
===========================================*/ 

/**
* Description: Returns a random integer value
*/

// Create a string array of 5 vehicles.
// Create a function called getValue with two parameters: an array and a string value.
// In the body of the getValue function, iterate over the parameterized array
// In the body of the for loop add an if statement and use the second parameter (see step 2) to test if the string value matches the 
// current value in the loop. 
// Finally, use the console.log() function to output the matching value. 
// Run and test the program and make sure your output matches what I have in the starter code.
// Stage, commit and push your work to GitHub. 

const header = require('../dawson-header.js');

console.log(header.display("Tisa", "Dawson", "Assignment 4.3"));

var vehicles = ["Mercedes", "Lexus", "Acura", "BMW", "Volvo"];
var vehicleName = ["Mercedes", "Lexus", "Acura", "BMW", "Volvo"];

function getValue(vehicles, vehicleName) {
    var notMatches = [];
    var matches = false;

    for ( var i = 0; i < vehicles.length; i++ ) {
        matches = false;
        for ( var v = 0; v < vehicleName.length; v++ ) {
            if ( vehicles[i] === vehicleName[v] ) matches = true;
        }
        if(!matches) notMatches.push( vehicles[i] );
    }
    return notMatches;
}
console.log(vehicles, vehicleName);