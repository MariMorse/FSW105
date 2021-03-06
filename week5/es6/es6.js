console.log("\n***Question 1***")
let name1 = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for(let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        if(pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pets)
    }
    console.log("man name: ", name1)
   return name
}
runForLoop(["cat", "dog"]);

console.log("\n***Question 2***");
const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = arr => {
    return arr.map(carrot => {
        return {type: "carrot", name: carrot}
});
}
console.log(mapVegetables([carrots]));

console.log("\n***Question 3***");
const people = [
    {name: "Princess Peach", friendly: false},
    {name: "Luigi", friendly: true},
    {name: "Mario", friendly: true},
    {name: "Bowser", friendly: false}
]

const filterForFriendly = people.filter(character => character.friendly === true)
console.log(filterForFriendly);

console.log("\n***Question 4-1***");
let doMathSum = (a, b) => a + b;

console.log(doMathSum(15, 5));

console.log("\n***Question 4-2***");
let produceProject = (a, b) => a * b;

console.log(produceProject(5, 15));

console.log("\n***Question 5***")
let stringPrint = (nameFirst = "Jane", nameLast = "Doe", ageOne = 100) => `Hi ${nameFirst} ${nameLast}, how does it feel to be ${ageOne}?`
console.log(stringPrint("Kat", "Stark", 40))
 

console.log("\n***Question 6***")
let printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
console.log(printString("Sleeping", "Beauty", 98))


console.log("\n***Question 7***")
const animals = [
    {type: "dog", name: "theodore"},
    {type: "cat", name: "whiskers"},
    {type: "pig", name: "piglette"},
    {type: "dog", name: "sparky"}
]

const filterForDogs = animals.filter(animal => animal.type === "dog")
    
console.log(filterForDogs);

console.log("\n***Auestion 8***")
let hawaii = (location = "", name = "") => `Hi ${name}!,\nWelcome to ${location}. 
I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log(hawaii("Hawaii", "Janice"));