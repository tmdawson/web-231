/*============================================; 
Title: dawson-assignment-4.4; 
Author: Professor Krasso ; 
Date: 15 December 2019; 
Modified By: Tisa Dawson; 
Description: Predicates;
===========================================*/ 

/**
 * Description: Returns a filtered value from an array using Predicates
 */

 const header = require('../dawson-header.js');

console.log(header.display("Tisa", "Dawson", "Assignment 4.4"));

console.log("\n");

function predicate_example(x) {
    return x > 5
  }

const states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// call the built-in JavaScript filter function and pass-in the predicate function
  const filtered_states = states.filter(predicate_example)
  
// output
  console.log(filtered_states[0] + ' is greater than 5')

console.log("-- ORIGINAL ARRAY --");
for (let v = 0; v < states.length; v++) {
  console.log(states[v]);
}

console.log("\n");
console.log("-- SORTED ARRAY --");
console.log(getValue(states, "Alabama"));

console.log("\n");
console.log(" -- SELECTED VALUE --");
console.log(getValue(states, "Nebraska"));

function getValue(arrayValue, filterValue) {
  for (let i = 0; i < arrayValue.length; i++) {
    if (arrayValue[i] === filterValue) {
      return arrayValue[i];
    }
  }
}