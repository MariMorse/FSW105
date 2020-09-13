console.log("\n***Question 1***")
function capitalizeAndLowercase(str) {
    var upperLower = str.toUpperCase() + str.toLowerCase();
    return "Upper and Lower Case String is:" + upperLower;
}
console.log(capitalizeAndLowercase("Hello"))

console.log("\n***Question 2***")
function findMiddleIndex(str) {
    var middleOfString = Math.floor(str.length / 2);
    return "Half of the String's length rounded down are " + middleOfString;
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));