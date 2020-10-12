const readlineSync = require("readline-sync");
const player = readlineSync.question("What is your name brave one? ");

let welcomeMessage = `Welcome ${player} to the 
Mushroom Forest, you need to reach the castle and save the princess from the Mushroom King, but beware... many enemies are waiting for you!!`
    console.log(welcomeMessage)

const enemies = ['Ninji', 'Lava Bubble', 'Fire Snake', 'Dry Bones']
let enemyAttack = 10
let maxEnemyHealth = 45

const specialItems = ['Fire Flower', 'Starman', 'Amulet', 'Cape']
let itemPickup = []

let playerHealthMax = 45
let playerAttackMax = 10

const options = readlineSync.keyIn(`What would you like to do? \nPress "W" to walk. \nPress "P" to print inventory. \nPress "E" to exit the game.\n`, {limit: '$<wpe>'});

function game() {

    
    let playerAttacked = Math.floor((Math.random() )
}