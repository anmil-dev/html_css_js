
function rollDice() {

let goldCoins = 0;

for (i=0; i<10; i++) {
    const roll = Math.floor(Math.random() * 6) +1;
    alert (`You rolled a ${roll}! You have a total of ${goldCoins} coins.`)

    if (roll ===1) {
    alert("Game over, no more rolls!")
    break;
    } else if (roll<5) {
        continue;
    }  

    alert(`Congratulations, you win ${roll} gold coins!`)
    goldCoins += roll;

}

alert(`Your final count is ${goldCoins} Gold Coins!`)

}