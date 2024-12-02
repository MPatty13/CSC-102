function rollDice(){
    // Random nymber generated between 1 and 6 
    const rollDice = Math.floor(Math.random() *6) +1;
    // Outcome is based on the dice roll 
    let resultMessage;
    if (diceRoll ===1){
        resultMessage= "You rolled a 1!";
    } else if (diceRoll <= 3) {
        resultMessage= "Rolled a "+3+ ". Very Nice!";
    } else {
        resultMessage= "Oh Crap, you rolled a " +6+ "Great roll";

    }
    document.getElementById("result").innerHTML = resultmessage;

}