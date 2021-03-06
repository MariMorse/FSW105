console.log("***String Methods***")
console.log("\n***Question 1***")
function capitalizeAndLowercase(str) {
    var upperLower = str.toUpperCase() + str.toLowerCase();
    return upperLower;
}
console.log(capitalizeAndLowercase("Hello"))

console.log("\n***Question 2***")
function findMiddleIndex(str) {
    total_length = str.length
    second_half_first_index = Math.floor(total_length / 2)
    return second_half_first_index
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

console.log("\n***Question 3***")
function returnFirstHalf(str) {
    var halfString = (str.length / 2);
    return str.slice(0, halfString);
}
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));

console.log("\n***Question 4***")
function upperAndLower(str) {
    var halfPoint = (str.length / 2);
    var fHalf = str.slice(0, halfPoint)
    var sHalf = str.slice(halfPoint)
    var response = fHalf.toUpperCase() + sHalf.toLowerCase()
    return response
}
console.log(upperAndLower("Hello"));
console.log(upperAndLower("Hello World"));

console.log("\n***Array Methods***");

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
//console.log(vegetables);
//console.log(fruit);

fruit.shift();
//console.log(fruit);

var orangeIndex = fruit.indexOf("orange")
//console.log(orangeIndex);

fruit.push(orangeIndex);
//console.log(fruit);

var vegLength = vegetables.length;
//console.log(vegetables)

vegetables.push(vegLength);
//console.log(vegetables);

var food = fruit.concat(vegetables)
//console.log(food)

food.splice(4, 2)
//console.log(food)

food.reverse();
//console.log(food)

console.log(food.toString());