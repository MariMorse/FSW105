const readlineSync = require("readline-sync");
const player = readlineSync.question("What is your name brave one? ");

let welcomeMessage = `Welcome ${player} to the 
Mushroom Forest, you need to reach the castle and save the princess from the Mushroom King, but beware... many enemies are waiting for you!!`
console.log(welcomeMessage)

const enemies = ['Ninji', 'Lava Bubble', 'Fire Snake', 'Dry Bones']
const enemyHealth = 45

const specialItems = ['Fire Flower', 'Starman', 'Amulet', 'Cape']
let itemPickup = []
let playerPickUp = specialItems[Math.floor(Math.random() * specialItems.length)]
let playerHealth = 45


function game() {

    const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)]
    const playerAttack = Math.floor(Math.random() * (4 - 3) + 6)
    const enemyAttack = Math.floor(Math.random() * (5 - 2) + 3)

    const options = readlineSync.keyIn(`What would you like to do? \nPress "W" to walk. \nPress "P" to print inventory. \nPress "E" to exit the game.\n`, { limit: '$<wpe>' });

    if (options == 'e') {
        console.log(`You have exited the game!`)
        return playerHealth = 0
    }
    else if (options == 'p') {
        console.log(`Name: ${player} \nInventory: ${playerPickUp} \n ${playerHealth}`)
    }
    else if (options == 'w') {
        let randomAttack = Math.floor((Math.random() * 2) + 3)
        if (randomAttack <= 2) {
            console.log(`Keep walking...`)
        }
    }
    else if (randomAttack >= 2) {
        console.log(`${randomEnemy} + has found you...`)

        while (playerHealth > 0 && enemyHealth > 0) {
            const runOrAttack = readlineSync.keyIn(`Press "R" to run away!! or.. Press "A" to attack, which option will you take?`, {limit: '$<ra>'})

            //Run
            if (runOrAttack == 'r') {
                let runPlayer = Math.random();
                    if (runPlayer >= .5) {
                console.log(`${randomEnemy} attacks with ${randomAttack}`)
                return game()
            }
            else if (runPlayer == 1) {
                playerHealth -= enemyAttack
                console.log(`Your escape failed ${randomEnemy} attacked, you lose`)
            }
        }
    }
}