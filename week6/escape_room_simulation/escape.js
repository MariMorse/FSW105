const readlineSync = require("readline-sync");
const player = readlineSync.question("May I have your name? ");

const welcomeM = `Welcome ${player} to Mari's Escape Room Simulation Game!`;
console.log(welcomeM);

let stillAlive = true;
let foundKey = false;

while(stillAlive == true)
{
    const optionsMenu = readlineSync.keyIn(`Hit 1...5 key: `, )
}