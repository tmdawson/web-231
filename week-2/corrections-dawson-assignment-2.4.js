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

// const header = require('../dawson-header.js');

// console.log(header.display("Tisa", "Dawson", "Week 2"));

/**
 * Description: returns the fullName, dateWriter, formatNumber, convertToInt and convertToFloat values
 */

/*variables defined
*/
    var firstName = "Mickey";
    var lastName = "Mouse";

/*function defined and output checked
*/

function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

/*function called
*/

fullName(firstName, lastName);

/*function defined and return results
*/

function dateWriter(year, month, day) {
    return year + "/" + month + "/" + day;
}

/*variables defined as string
*/
    var a = "57";
    var b = "12";

/*function defined and return results and check output
*/

function convertToInt(string) {
    return parseInt(string);
}

console.log(convertToInt(a));

/*variables defined as numbers
*/

    var number = 33.6;
    var numOfFixedPositions = 1;  

/*function defined and return results and check output
*/

function formatNumber(num, numOfFixedPositions) {
	return number.toFixed(numOfFixedPositions);
}

console.log(formatNumber(number, numOfFixedPositions));

/*variables defined as string
*/
    var x = "50000";
    var y = "3.99";

/*function defined and return results and check output
*/

function convertToFloat(aString) {
    return parseFloat(aString);
}

console.log(convertToFloat(y));

/*Check entire output
*/

console.log('\n' + "Hello my name is " + firstName + " " + lastName + "!" + '\n');
console.log("Todays date is " + dateWriter(2019, 12, 11)+ " and the current temperature is " + formatNumber(33.6, 1) + " degrees." + '\n');
console.log("I am " + convertToInt("35") + " years old and my savings account goal is " + convertToFloat("1000000.4") + " dollars.");
