//***Section A- .filter()
console.log("***A-1***");
var fiveAndGreaterOnly = [3, 6, 8, 2];

var result = fiveAndGreaterOnly.filter(function(arr1){
    if(arr1 > 5)
        return true;
})
console.log(result);

console.log("\n***A-2***");
var evensOnly = [3, 6, 8, 2];

var result = evensOnly.filter(function(arr) {
    if(arr % 2 === 0) 
        return true;
})
console.log(result);

//Section B .map
console.log("\n***B-1***");
const doubleNumbers = [2, 5, 100]

const results = doubleNumbers.map(function(arr){
    return arr * 2;
})
console.log(results);
