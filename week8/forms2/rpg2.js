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
    const playerAttack = Math.floor((Math.random() * 3) + 1)
    const enemyAttack = Math.floor((Math.random() * 3) + 1)

    const options = readlineSync.keyIn(`What would you like to do? \nPress "W" to walk. \nPress "P" to print inventory. \nPress "E" to exit the game.\n`, { limit: '$<wpe>' });

    if (options == 'e') {
        console.log(`You have exited the game!`)
        return playerHealth = 0
    }
    else if (options == 'p') {
        console.log(`Name: ${player} \nInventory: ${playerPickUp} \n ${playerHealth}`)
    }
    else if (options == 'w') {
        let randomAttack = Math.floor((Math.random() * 3) + 1)
        console.log(randomAttack)
        if (randomAttack == 1) {
            console.log(`Attacked`)
        }
        console.log('Exiting walk')
    }
    else if (randomAttack >= 2) {
        console.log(`${randomEnemy} + has found you...`)

        while (playerHealth > 0 && enemyHealth > 0) {
            const runOrAttack = readlineSync.keyIn(`Press "R" to run away!! or.. Press "A" to attack, which option will you take?`, { limit: '$<ra>' })

            //Run
            if (runOrAttack == 'r') {
                let runAway = Math.floor((Math.random() * 3) + 1)
                if (runAway <= 1) {
                    console.log(`You have gotten away ${player} !`)
                    return game()
                }
                else if (runOrFail >= 2) {
                    playerHealth -= enemyAttack
                    console.log(`Your escape failed! You lost ${enemyAttack} points by the enemy!`)
                }
            }

            if (attackOrRun == 'a') {
                enemyHealth -= playerAttack
                playerHealth -= enemyAttack
                console.log(`You hit the enemy with ${playerAttack} points. You were hit with ${enemyAttack} points`)
                
                if (enemyHealth <=0) {
                    playerHealth = 45
                    itemPickup.push(playerPickUp)
                    console.log(`You defeated ${randomEnemy}! You found a ${specialItems} to help you rescue the princess!`)
                }
                else if (playerHealth <= 0) {
                    console.log(`Sorry ${player} you dd not save the princess... Game Over!!`)
                }
            }   

        }
    }
}

while(playerHealth > 0) {
    playerContinue = function() {
        playerActive = true;
        playerHealth = 45;
    };
    playerContinue();
    game();
}