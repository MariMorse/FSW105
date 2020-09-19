//var readLineSync = require("readline-sync");

var numberOne = readlineSync.questionInt("Enter your first number:");
var numberTwo = readlineSync.questionInt("Please enter your second number:")
var operation = readlineSync.question("Please enter the operation tp perform - add, sub, mul, div:")

//***Function 1- adding two numbers
function add(num1, num2) {
    return "Adding Number 1: " + num1 + " with Number 2: " + num2 + " results in a sum of: " + (num1 + num2);
}

//***Function 2- subtracting two numbers
function subtract(num1, num2) {
    return "Subtracting Number 1: " + num1 + " and Number 2: " + num2 + " results in: " +(num1 - num2); 
}

//***Function 3- Multiplying two numbers
function multiply(num1, num2) {
    return "Multiplying Number 1: " + num1 + " and Number 2: " + num2 + " results in: " + (num1 * num2);
}

//***Function 4- Dividing two numbers
function division(num1, num2) {
    return "Dividing Number 1: " + num1 + " and Number 2: " + num2 + " results in: " + (num1 / num2);
}

if (operation == "add") {
    console.log(add(numberOne, numberTwo));
}
