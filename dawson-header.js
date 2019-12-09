/*
============================================
; Title:  dawson-header.js
; Author: Professor Krasso 
; Date:   02 December 2019
; Modified By: Tisa Dawson
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/

//Return the header variables
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' + 
	new Date().toLocaleDateString('en-US');

	return output;
}
