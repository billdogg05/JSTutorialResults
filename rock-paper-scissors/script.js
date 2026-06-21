const resContainer = document.querySelector(".game-results")
const errorMessage = document.getElementById("error")
const imgs = document.querySelectorAll('.game-res img');
const divs = document.querySelectorAll('.game-res>div>div');
const player = document.getElementById("player")
const comp = document.getElementById("comp")
const choice = ["rock", "paper", "scissors"]
let res = "";
let playerCount = 0
let compCount = 0

function play() {
    const rock = document.getElementById("rock").checked
    const paper = document.getElementById("paper").checked
    const scissors = document.getElementById("scissors").checked
    const output = document.querySelector(".output")

    divs.forEach(div => div.classList.remove("win"));
    divs.forEach(div => div.classList.remove("lose"));

    if (rock || paper || scissors) {
        errorMessage.innerHTML = ""
        resContainer.classList.add("active")
        const compChoice = choice[Math.floor(Math.random() * 3)]
        const playerChoice = choice[choiceNum(rock, paper)]

        if (compChoice == playerChoice) {
            res = "Draw"
        }
        else {
            switch (compChoice) {
                case ("rock"):
                    res = paper ? "You Won" : "You Lost"
                    break;
                case ("paper"):
                    res = scissors ? "You Won" : "You Lost"
                    break;
                case ("scissors"):
                    res = rock ? "You Won" : "You Lost"
                    break;
            }
        }

        switch (res) {
            case "You Won":
                divs[0].classList.add("win")
                divs[1].classList.add("lose")
                playerCount++
                break
            case "You Lost":
                divs[1].classList.add("win")
                divs[0].classList.add("lose")
                compCount++
                break
        }

        output.innerHTML = res
        player.innerHTML = `You: ${playerCount}`
        comp.innerHTML = `AI: ${compCount}`
        imgs[0].src = `assets/${playerChoice}.svg`;
        imgs[1].src = `assets/${compChoice}.svg`;

    } else {
        errorMessage.innerHTML = "Make your move first. Pick an option!"
    }

}

function choiceNum(rockOption, paperOption) {
    if (rockOption) {
        return 0
    } else if (paperOption) {
        return 1
    } else {
        return 2
    }
}