//***Section A- .filter()
console.log("***A-1***");
function fiveAndGreaterOnly(arr) {

}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

console.log("\n***A-2***");
function evensOnly(arr) {

}
console.log(evensOnly([3, 6, 8, 2]));

console.log("\n***A-Extra Credit***");
function ofAge(arr) {

}
console.log(ofAge([
    {name: "Angelina Jolie", age: 80 },
    {name: "Eric Jones", age: 2 },
    {name: "Paris Hilton", age: 5 },
    {name: "Kanye West", age: 16 },
    {name: "Bob Ziroll", Age: 100 }
]));

//Section B- .map()
console.log("***B-1***");
function doubleNumbers(arr) {

}
console.log(doubleNumbers([2, 5, 100]));

console.log("\n***B-2***");
function stringItUp(arr) {

}
console.log(stringItUp([2, 5, 100]));

console.log("\n***B-3***");
function captializeNames(arr) {

}
console.log(captializeNames(["john", " JACOB", "jinGleHeimer", "schmidt"]));

console.log("\n***B-Extra Credit-1***");
function namesOnly(arr) {

}
console.log(namesOnly([
    {   name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {  
        name: "Bob Ziroll",
        age: 100
    }
]));

console.log("\n***B-Extra Credit-2***");
function makeStrings(arr) {

}

console.log(makeStrings([
    {   name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {  
        name: "Bob Ziroll",
        age: 100
    }
]));

//Section C-  .reduce()
console.log("\n***C-1***");
function total(arr) {

}
console.log(total([1,2,3]));

console.log("\n***C-2***");
function stringConcat(arr) {

}
console.log(stringConcat([1,2,3]));

console.log("\n***C-3***");
//NOTE: You don't necessarily have to use reduc for this, try to think of multiple ways to sole it.
function totalVotes(arr) {

}
var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: true},
    {name: 'Sam', age: 20, voted: true},
    {name: 'Phil;', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: true},
    {name: 'Becky', age: 43, voted: true},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: true},
];
console.log(totalVotes(voters));