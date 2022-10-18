let dicesP1 = [];
let diceP2 = [];

function diceRoll() {
    return Math.floor(Math.random() * 6)+1;
}

function doDiceRolls(numberOfDices) {
    let dices = []
    for (let i = 0; i < numberOfDices; i++) {
        dices[i] = diceRoll();
    };

    return dices;
}

function calculateSkirmish(attackers, defenders) {
    killedDefenders = 0;
    killedAttackers = 0;

    currentAttackers = attackers;
    currentDefenders = defenders;

    if (Math.max(...defenders) >= Math.max(...attackers)) {
        killedAttackers += 1;
        delete currentAttackers[currentAttackers.findIndex(object => { return object === Math.max(...attackers);})];
        currentAttackers = currentAttackers.filter(function(x) { return x !== undefined;});
    };
    return [currentAttackers, currentDefenders];
}

function calculateBattle(attackers, defenders) {
    // Positive number is how many attackers were left alive and negative number is how many defenders were left alive.
    currentAttackers = attackers
    currentDefenders = defenders
    while (currentDefenders > 1) {

    };
    if (currentDefenders == 0) {
        return currentAttackers
    } else {

    };
}

console.log(calculateSkirmish([1,1,1], [6,6]));
