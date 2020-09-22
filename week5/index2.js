console.log("\n***A-2***");
const evensOnly = [3, 6, 8, 2]

const result2 = evensOnly.filter(function(arr) {
    if(arr % 2 === 0) 
        return true
})
console.log(result2);