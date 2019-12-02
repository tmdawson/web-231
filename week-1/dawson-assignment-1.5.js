/*============================================; 
Title: Assignment 1.5; 
Author: Professor Krasso ; 
Date: 25 November 2019; 
Modified By: Tisa Dawson; 
Description: Types, Values and Variables Assignment;
===========================================*/ 
var firstName1 = "Mickey";
var lastName1 = "Mouse";
var address1 = "1 First Street, Chicago IL 60010";
var payRate1 = 15.20;
payRate1.toFixed(1);
var hireDate1 = new Date("02/01/1999");
var employee1 = firstName1 + " " + lastName1 + ", " + address1 + ", " + payRate1 + ", " + hireDate1 + " \n";  //Concatenate employee record

var firstName2 = "Donald";
var lastName2 = "Duck";
var address2 = "2 Second Blvd, Sacramento CA 90021";
var payRate2 = 20.50;
payRate2.toFixed(1);
var hireDate2 = new Date ("06/09/2002");
var employee2 = firstName2 + " " + lastName2 + ", " + address2 + ", " + payRate2 + ", " + hireDate2 + " \n"; //Concatenate employee record

var firstName3 = "Bugs";
var lastName3 = "Bunny";
var address3 = "3 Third Road, Denver CO 30023";
var payRate3 = 25.50;
payRate3.toFixed(1);
var hireDate3 = new Date ("11/05/2014");
var employee3 = firstName3 + " " + lastName3 + ", " + address3 + ", " + payRate3 + ", " + hireDate3 + " \n"; //Concatenate employee record

console.log(employee1 + employee2 + employee3);