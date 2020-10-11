const readlineSync = require("readline-sync");
const player = readlineSync.question("What is your name brave one? ");

let welcomeMessage = `Welcome ${player} to the 
Mushroom Kingdom, you need to reach the castle and save the princess from the Mushroom King, but beware... many enemies are waiting for you!!`
    console.log(welcomeMessage)

const enemies = ['Ninji', 'Lava Bubble', 'Fire Snake', 'Dry Bones']
let enemyAttack = 10

const specialItems = ['Fire Flower', 'Starman', 'Amulet', 'Cape']
let itemPickup = []

let playerHealth = 45
let playerAttack = 10

const options = 