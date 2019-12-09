/*============================================; 
Title: dawson-assignment-2.4; 
Author: Professor Krasso ; 
Date: 02 December 2019; 
Modified By: Tisa Dawson; 
Description: Functions Assignment;
===========================================*/ 

/**
* Description: Returns a well-formatted string header
*/

const header = require('../dawson-header.js');

console.log(header.display("Tisa", "Dawson", "Week 2"));

/**
 * Description: returns the fullName, dateWriter, formatNumber, convertToInt and convertToFloat values
 */

function fullName(firstName, lastName) {
    var firstName = Mickey;
    var lastName = Mouse;
    return fullName (firstName + ' ' + lastName);
}

function dateWriter(year, month, day) {
    var now = new Date(dateWriter);
}

function formatNumber(num, numOfFixedPositions) {
    var number = 33.6;
    var numOfFixedPositions = 1;  
}

function convertToInt(a, b) {
    a = 57
    b = 12
    return convertToInt(a - b);
}

function convertToFloat(x, y) {
    x = 500000
    y = 3;
    return convertToFloat(x * y);
}

console.log('\n' + fullName + '\n' + 'Assignment 2.4' + '\nDate: ' + 
new Date().toLocaleDateString('en-US') + '\n' + 'Hello my name is ' + fullName + '!' + '\n' 
+ 'Todays date is ' + 'and the current temperature is' + formatNumber + 'degrees.' + '\n' + 'I am' + convertToInt 
+ 'years old and my savings account is' + convertToFloat + 'dollars.');
