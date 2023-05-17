function rollDice (faces) {
    let randomNum = 0.0001 * (faces-1) + 1;
    let randomFace = Math.round(randomNum);
    return (randomFace);
}
console.log(rollDice(3));