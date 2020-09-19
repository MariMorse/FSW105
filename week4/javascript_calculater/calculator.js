const readline = require("readline-sync");

var numberOne = readline.questionInt(" Please enter your first number:");
var numberTwo = readline.questionInt("Please enter your second number:");
var operation = readline.question("Please enter the operation to perform - add, sub, mul, div : ");

//***Function 1- adding two numbers
function add(num1, num2) {
    return "Adding Number 1 (" + num1 + ") with Number 2 (" + num2 + ") results in a sum of : " + (num1 + num2);
}

//***Function 2- subtracting two numbers
function subtract(num1, num2) {
    return "Subtracting Number 1 (" + num1 + ") and Number 2 (" + num2 + ") results in : " +(num1 - num2); 
}

//***Function 3- Multiplying two numbers
function multiply(num1, num2) {
    return "Multiplying Number 1 (" + num1 + ") and Number 2 (" + num2 + ") results in : " + (num1 * num2);
}

//***Function 4- Dividing two numbers
function division(num1, num2) {
    return "Dividing Number 1 (" + num1 + ") and Number 2 (" + num2 + ") results in : " + (num1 / num2);
}

if (operation == "add") {
    console.log(add(numberOne, numberTwo));
}
else if (operation == "sub") {
    console.log(subtract(numberOne, numberTwo));
}
else if (operation == "mul") {
    console.log(multiply(numberOne, numberTwo));
}
else if (operation == "div") {
    console.log(division(numberOne, numberTwo));
}