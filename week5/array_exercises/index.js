//***Section A- .filter()
console.log("***A-1***");
const fiveAndGreaterOnly = [3, 6, 8, 2]

const result = fiveAndGreaterOnly.filter(function(arr){
    if(arr > 5)
        return true
})
console.log(result);

console.log("\n***A-2***");
const evensOnly = [3, 6, 8, 2]

const result2 = evensOnly.filter(function(arr) {
    if(arr % 2 === 0) 
        return true
})
console.log(result2);

