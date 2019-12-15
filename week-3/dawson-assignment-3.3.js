/*============================================; 
Title: dawson-assignment-3.3; 
Author: Professor Krasso ; 
Date: 09 December 2019; 
Modified By: Tisa Dawson; 
Description: Control Statements;
===========================================*/ 

/**
* Description: Modify Starter Code from if...else statements to switch block.
*/

const header = require('../dawson-header.js');

console.log(header.display("Tisa", "Dawson", "Exercise 3.3"));

let eventKeyCode = 13;

switch (eventKeyCode) {
    case 13:
        console.log('\n' + 'The enter key was pressed.');
        break;
    case 16:
        console.log('\n' + 'The shift key was pressed.');
        break;
    case 32:
        console.log('\n' + 'The space bar key was pressed.');
        break;
    case 8:
        console.log('\n' + 'The backspace / delete key was pressed.');
        break;
    default:
        console.log('\n' + 'Unrecognized key.')
        break;
}