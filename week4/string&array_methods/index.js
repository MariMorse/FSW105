console.log("***String Methods***")
console.log("\n***Question 1***")
function capitalizeAndLowercase(str) {
    var upperLower = str.toUpperCase() + str.toLowerCase();
    return "Upper and Lower Case String is:" + upperLower;
}
console.log(capitalizeAndLowercase("Hello"))

console.log("\n***Question 2***")
function findMiddleIndex(str) {
    total_length = len(str)
    second_half_first_index = Math.floor(total_length / 2)
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
    var strLength = (str.length);
    
}
console.log(upperAndLower("Hello"));
console.log(upperAndLower("Hello World"));

console.log("\n***Array Methods***");

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
//console.log(vegetables);

fruit.shift();
//console.log(fruit);

var orangeIndex = fruit.indexOf("orange")
//console.log(orangeIndex);

fruit.push("1");
//console.log(fruit);

vegetables.length;
//console.log(vegetables)

vegetables.push("3");
//console.log(vegetables);

var food = fruit.concat(vegetables)
console.log(food)

//var newArr = food.()



