/*============================================; 
Title: dawson-assignment-4.3; 
Author: Professor Krasso ; 
Date: 14 December 2019; 
Modified By: Tisa Dawson; 
Description: Arrays;
===========================================*/ 

/**
 * Description: Returns a filtered value from an array
 */

const header = require('../dawson-header.js');

console.log(header.display("Tisa", "Dawson", "Assignment 4.3"));

console.log("\n");

const vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

console.log("-- DISPLAYING NAMES --");
for (let v = 0; v < vehicles.length; v++) {
  console.log(vehicles[v]);
}

console.log("\n");
console.log(" -- SELECTED VALUE --");
console.log(getValue(vehicles, "Car"));

console.log("\n");
console.log(" -- SELECTED VALUE --");
console.log(getValue(vehicles, "Truck"));

function getValue(arrayValue, filterValue) {
  for (let i = 0; i < arrayValue.length; i++) {
    if (arrayValue[i] === filterValue) {
      return arrayValue[i];
    }
  }
}
