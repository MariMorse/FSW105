const readlineSync = require("readline-sync");
const player = readlineSync.question("What is your name? ");

const welcomeM = `\n${player}, Welcome to 13th Floor Escape Room Simulation Game!`;
console.log(welcomeM);

let stillAlive = true;
let foundKey = false;

while (stillAlive == true) {
    const optionsMenu = readlineSync.keyIn('\nYou are in a room with a door. There is a hole in the wall and a box in the middle of the room. \n\n Press 1 to Reach in the hole \n Press 2 to Open the box \n Press 3 to Open the door \n', { limit: '$<1-3>' });

    if (optionsMenu == 1) {
        //Player is DEAD!!
        //End the Game
        console.log(`\nGame Over ${player}! You are DEAD!!`);
        stillAlive = false;
    } else if (optionsMenu == 2 && foundKey == false) {
        //Player has NEVER been through Option- 2 
        //Player needs to Find the key
        console.log(`\n${player}, great job! You found a key!`);
        foundKey = true;
    } else if (optionsMenu == 2 && foundKey == true) {
        //Player has Found the Key
        //Player and  she/he needs to go to Option 3 to Open the Door
        console.log(`\n${player}, you have ALREADY found a key... Now you need to escape.`);
    } else if (optionsMenu == 3 && foundKey == false) {
        //Player does NOT have the key; remind that s/he needs to use Option 2
        //Find the key first
        console.log(`\n${player}, the door is locked and will not open!`);
    } else if (optionsMenu == 3 && foundKey == true) {
        //Player has found the key and the door is open!!.
        //Game is OVER!! Great job Player!
        console.log(`\nCongratulations ${player}! You have opened the DOOR and ESCAPED!!`);
        stillAlive = false;
    }

}








