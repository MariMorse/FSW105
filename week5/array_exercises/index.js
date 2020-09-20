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
//NOTE: You don't necessarily have to use reduce for this, try to think of multiple ways to sole it.
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

console.log("\n***C-Extra Credit 1***");
function shoppingSpree(arr) {

}

var wishList = [
    {title: "Tesla Model S", price: 90000 },
    {title: "4 carat diamond ring", price: 45000 },
    {title: "Fancy hacky Sack", price: 5 },
    {title: "Gold fidget spinner", price: 2000 },
    {title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishList));

console.log("\n***C-Extra Credit 2***");
//NOTE-Take a look at Array.concat() to help with this one:
function flatten(arr) {

}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

//Section D- use the built in .sort() method on arrays to solve all of these problems:
console.log("\n***D-1***");
function leastToGreatest(arr) {

}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

console.log("\n***D-2***");
function greatestToLeast(arr) {

}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

console.log("\n***D-3***");
function lengthSort(arr) {

}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

console.log("\n***D-Extra Credit***");
function alphabetical(arr) {

}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));