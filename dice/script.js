function rollDice() {
    const diceNum = document.getElementById("dice").value;
    const diceRes = document.getElementById("diceRes");
    const diceImg = document.getElementById("diceImg");
    const error = document.getElementById("error")
    const values = [];
    const images = [];
    let total = 0

    if (diceNum > 0 && diceNum < 17) {
        error.innerHTML = ""
        for (let i = 0; i < diceNum; i++) {
            let value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            images.push(`<img src="assets/${value}.svg" alt="dice_${value}" class="dice-img">`)

        }
        diceRes.innerHTML = "Total: " + values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        diceImg.innerHTML = images.join("")
    } else {
        error.innerHTML = "Wrong input! It accepts NUMBERS between 1 and 16"
    }
}