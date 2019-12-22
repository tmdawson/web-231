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

// Create a string array of five (5) fruit items (order does not matter).
// Create a function called getFruit with one parameter (an array)
// In the body of the getFruit function iterate over the parameterized array (see step 2) and 
// output the results using the console.log() function.
// Call the getFruit function and pass-in the array created in step 1 to test the results.
// Run and test the program and make sure your output matches what I have in the starter code.
// Stage, commit and push your work to GitHub.

const header = require('../dawson-header.js');

console.log(header.display("Tisa", "Dawson", "Assignment 4.2"));

var fruits = ["Pineapple", "Apple", "Strawberry", "Kiwi", "Banana"];
fruits.forEach(getFruit);

function getFruit(fruit_element) {
    console.log(fruit_element);
}
