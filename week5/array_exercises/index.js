//***Section A- .filter()
console.log("***A-1***");
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function (num) {
        if (num >= 5) {
            return true;
        };
    });
    return result;
};
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//console.log("\n***A-2***");
//function evensOnly(arr) {
//    const result = arr.filter(function (num) {
//        if (num % 2 === 0) {
//            return true;
//        };
//    });
//    return result;
//};
//console.log(evensOnly([3, 6, 8, 2]));
//Section B .map
//console.log("\n***B-1***");
//function doubleNumbers(arr){
//    let double = arr.map(i=>i*2);
//    return double;
//}
//console.log(doubleNumbers([2, 5, 100]));

//console.log("\n***B-2***");
//function stringItUp(arr){
//    let string = arr.map(String);
//    return string;
//}
//console.log(stringItUp([2, 5, 100]));
//console.log("\n***B-3***");
//function capitalizeNames(arr) {
//    let upperCase = arr.map(function(string){
//        return string.substr(0,1).toUpperCase() + string.substr(1).toLowerCase();
//      })
//      return upperCase
//}
//console.log(capitalizeNames(["john", "JACOB", "jinGLehiemer", "schmidt"]));
//Section C- .reduce()
//console.log("\n***C-1***");
//I chose to use the ES6 because it shortens the code into 3 lines, it is also easier to read, and I like the ES6.
//const nums = [1, 2, 3]

//const total = nums.reduce((final, num) => final + num);  
//console.log(total)

//console.log("\n***C-2***");
//const stringConcat = [1, 2, 3]
//
//const result = stringConcat.reduce(function(final, stringNums){
//    
//}
//console.log(result)

//console.log("\n***C-3***");
//const totalVotes = [
//    {name: 'Bob', age: 30, voted: true},
//    {name: 'Jake', age: 32, voted: true},
//    {name: 'Kate', age: 25, voted: false},
//    {name: 'Sam', age: 20, voted: false},
//    {name: 'Phil', age: 21, voted: true},
//    {name: 'Ed', age: 55, voted: true},
//    {name: 'Tami', age: 54, voted: true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
//]
//
//const voteCount = totalVotes.reduce(function(final, voter){
//    if(voter.voted) {
//        final++
//    }
//    return final
//}, 0) 
//
//console.log(voteCount)
//Section D .sort()
//console.log("\n***D-1***")
//const leastToGreatest = [1, 3, 5, 2, 90, 20]
//    
//leastToGreatest.sort((a, b) => a - b)
//
//console.log(leastToGreatest);

//console.log("\n***D-2***");
//const largestToSmallest = [1, 3, 5, 2, 90, 20]
//
//largestToSmallest.sort(function(a, b){
//    return b - a
//});
//
//console.log(largestToSmallest)

console.log("\n***D-3***");
const lengthSort = ["dog", "wolf", "by", "family", "eaten"]

lengthSort.sort(function(a, b){
    return a.length - b.length
});
console.log(lengthSort);