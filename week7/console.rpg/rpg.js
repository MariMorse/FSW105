const readlineSync = require("readline-sync");
const player = readlineSync.question("What is your name brave one? ");

let welcomeMessage = `\nWelcome, ${player}, to the Mushroom Forest. You need to reach the castle and save the princess from the Mushroom King. But beware... many enemies are waiting for you!!`
console.log(welcomeMessage)

const enemies = ['Ninji', 'Lava Bubble', 'Fire Snake', 'Dry Bones']
let enemyHealth = 20 //All enemies have the same HP; can update enemies to have HP and attack damage values in the future

const specialItems = ['Fire Flower', 'Starman', 'Amulet', 'Cape']
let playerInventory = [] //Player starts with no items. Items right now don't really do anything.
let playerHealth = 50 
let playerMaxHealth = 50
let distanceToCastle = 20
let playing = true

function game() {
    const options = readlineSync.keyIn(`\nWhat would you like to do? \nPress "W" to walk. \nPress "S" to sleep.\nPress "I" to view inventory. \nPress "C" for character stats.\nPress "E" to exit the game.\n`, { limit: '$<wsice>' });

    if (options.toLowerCase() == 'e') {
        console.log(`You have exited the game!`)
        return playing = false
    }
    else if (options.toLowerCase() == 'i') { printPlayerInventory() } //These lines are condensed to make the code easier to read
    else if (options.toLowerCase() == 'c') { printPlayerStats() }
    else if (options.toLowerCase() == 's') { playerSleeps() } //Sleeping replenishes the players health to full
    else if (options.toLowerCase() == 'w') { playerWalks() }
}

function playerSleeps() {
    if (playerHealth == playerMaxHealth) {
        console.log(`You don't need to sleep.`)
    } else {
        playerHealth = playerMaxHealth
        console.log(`You have regained your health to ${playerHealth}.`)
    }
}

function printPlayerInventory() {
    if (playerInventory.length != 0) {
        console.log("\nYou posses the following items: \n" + playerInventory)
    } else {
        console.log('You do not have any items.')
    }
}

function printPlayerStats() {
    console.log(`Player name: ${player}\nPlayer health: ${playerHealth}\nDistance to castle: ${distanceToCastle}`)
}

function playerWalks() {
    let randomAttack = Math.floor((Math.random() * 3) + 1) //33% chance player gets attacked
    if (randomAttack == 1) { playerAttacked() } //Condensed
    distanceToCastle--
    //I added different messages for the user to see each time "w" is chosen, it would look better and better readability inside of an array. This is the quick solution I chose to go with. 
    let randomWalkingMessage = Math.floor((Math.random() * 3) + 1)
    if (randomWalkingMessage == 1) { strMsg = "Walking...." }
    if (randomWalkingMessage == 2) { strMsg = "Almost there..." }
    if (randomWalkingMessage == 3) { strMsg = "One step closer..." }
    console.log(strMsg)
}

function playerReachedCastle() {
    console.log(`You have reached the castle. The Mushroom King was not home so you and the princess escaped thrugh the forest to safety!!`)
    return playing = false
}

function playerHasDied() {
    console.log('You have been slain. You failed your quest.')
    return playing = false
}

function playerAttacked() {
    const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)]
    console.log(`${randomEnemy} has found you...`)
    let playerBeingAttacked = true
    while (playerBeingAttacked == true) {
        //console.log(`Us: ${playerHealth}; Them: ${enemyHealth}`) //Used for debugging
        const options = readlineSync.keyIn(`\nWhat would you like to do? \nPress "A" to attack. \nPress "R" to try to run.\n`, { limit: '$<ar>' });
        if (options.toLowerCase() == 'r') { //Player is attempting to run away
            let randomTryingToRun = Math.floor((Math.random() * 3) + 1)
            if (randomTryingToRun == 1) {
                console.log(`You have succesfully escaped the ${randomEnemy}.`)
                playerBeingAttacked = false
            } else {
                console.log(`You do not get away.`)
            }
        }
        if (options.toLowerCase() == 'a') { //Player is attempting to attack
            const playerAttackHit = Math.floor((Math.random() * 3) + 1)
            const playerAttackDamage = Math.floor((Math.random() * 6) + 1)
            if (playerAttackHit == 1 && playerBeingAttacked == true) {
                enemyHealth -= playerAttackDamage
                console.log(`You hit ${randomEnemy} for ${playerAttackDamage} points of damage.`)
            } else {
                console.log(`You missed.`)
            }
        }
        if (enemyHealth > 0 && playerBeingAttacked == true) { //If player has escaped or enemy is dead, enemy does not get a chance to attack.
            const enemyAttackHit = Math.floor((Math.random() * 3) + 1)
            const enemyAttackDamage = Math.floor((Math.random() * 6) + 1)
            if (enemyAttackHit == 1 && playerBeingAttacked == true) {
                playerHealth -= enemyAttackDamage
                console.log(`${randomEnemy} hit you for ${enemyAttackDamage} points of damage.`)
            } else {
                console.log(`${randomEnemy} missed.`)
            }
        }
        if (playerHealth <= 0) { playerHasDied() }
        if (enemyHealth <= 0 && playerHealth > 0) {
            playerBeingAttacked = false
            enemyHealth = 20 //This just resets the health for the *next* enemy since they all have the same HP at this point
            const enemyDropsItem = Math.floor((Math.random() * 3) + 1)
            if (enemyDropsItem == 1) {
                let playerPickUp = specialItems[Math.floor(Math.random() * specialItems.length)]
                playerInventory.push(playerPickUp)
                console.log(`You defeated ${randomEnemy}! You found a ${playerPickUp} to help you rescue the princess!`)
            } else {
                console.log(`You defeated ${randomEnemy}!`)
            }
        }
    }
}

while (playing == true) {
    game();
    if (playerHealth <= 0) { playerHasDied() }; //These lines are condensed to improve readability.
    if (distanceToCastle == 0) { playerReachedCastle() };
}

/* I will continue you working on this project to learn and update because I have enjoyed these RPG with node.js & readline-sync. I will be adding graphics and more as listed below as I go. 
BUG: Player can press enter without entering name and still continue, would like to make it a REQUIREMENT for the info. 
 Improvements for future
Incorporate health potions
Enemy HP and damage stats; contained in array?
Items provide some purpose: increased damage, health, luck
*/
