const readlineSync = require("readline-sync");
const player = readlineSync.question("May I have your name? ");

const welcomeM = `Welcome ${player} to Mari's Escape Room Simulation Game!`;
console.log(welcomeM);

let stillAlive = true;
let foundKey = false;

while (stillAlive == true) {
    const optionsMenu = readlineSync.keyIn('Push 1 to Put hand in the hole \n  Push 2 to Find the key \n Push 3 to Open the door', { limit: '$<1-3>' });

    if (optionsMenu == 1) {
        //Player is DEAD!!
        //End the Game
        console.log(`Game Over ${player}, you are DEAD!!`);
        stillAlive = false;
    } else if (optionsMenu == 2 && foundKey == false) {
        //Player has NEVER been through Option- 2 
        //Player needs to Find the key
        console.log(`${player} great job, you found the key!`);
        foundKey = true;
    } else if (optionsMenu == 3 && foundKey == true) {
        //Player has Found the Key
        //Player and  she/he needs to go to Option 3 to Open the Door
        console.log(`${player}, you have ALREADY found the key... Please proceed to Option-3`);
    } else if (optionsMenu == 3 && foundKey == false) {
        //Player does NOT have the key, remind that s/he needs to use Option 2
        // Find the key first
        console.log(`${player}, you need to FIND the key first. Please use Option-2 and then come back!`);
        foundKey = true;
    } else if (optionsMenu == 3 && foundKey == true) {
        //Player has found the key and the door is open!!.
        //Game is OVER!! Great job Player!
        console.log(`Congradulations ${player}, you have successfully opened the DOOR and WON the game!!`);
        foundKey = false;
    }

}








