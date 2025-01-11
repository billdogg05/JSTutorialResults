// COUNTER
const number = document.getElementById('number');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
let count = 0;

plus.onclick = function () {
    count++;
    number.innerHTML = count;
}
minus.onclick = function () {
    count--;
    number.innerHTML = count;
}
reset.onclick = function () {
    count = 0;
    number.innerHTML = count;
}


// RANDOMIZER

const randomize = document.getElementById('randomize');
const randomP = document.getElementById('random-p');
randomize.onclick = function () {
    let max = Number(document.getElementById('max').value);
    let min = Number(document.getElementById('min').value);
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    result = result >= 30 ? 'Your number is less than 30' : 'Your number is more than 30 but not 30';
    randomP.innerHTML = result;
}


// STRING METHODS
let string = "Football Club Arsenal";
let firstWord = string.slice(0, string.indexOf(" "));
let secondWord = string.slice(string.indexOf(" ") + 1, string.lastIndexOf(" "));
let thirdWord = string.slice(string.lastIndexOf(" ") + 1);
console.log(firstWord);
console.log(secondWord);
console.log(thirdWord);

let email = "billdogg@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1)
console.log(username);
console.log(extension);


// NUMBER GUESSING GAME
let running = false;
let attempts = 0;
const minN = 10;
const maxN = 90;
let userInput;

const gameResult = Math.floor(maxN - minN + 1 * Math.random());
while (running) {
    userInput = +prompt(`Guess the number between ${minN} and ${maxN}`)
    if (isNaN(userInput) || userInput > maxN || userInput < minN) {
        alert("Invalid input, try again");
    }
    else {
        if (userInput > gameResult) {
            alert("Try lower");
            attempts++;
        }
        else if (userInput < gameResult) {
            alert("Try higher");
            attempts++;
        }
        else {
            alert(`With ${attempts} attempts you finnaly won!`);
            running = false;
        }
    }
}


// TEMPERATURE CONVERTOR
const f = document.getElementById("f");
const c = document.getElementById("c");
const userTemp = document.getElementById("tempNum").value;
const tempBtn = document.getElementById("temp-btn");
const tempRes = document.getElementById("temp-res");

function convert() {
    if (f.checked) {
        tempRes.innerHTML = 5 / 9 * (userTemp - 32);
    } else if (c.checked) {
        tempRes.innerHTML = userTemp * (9 / 5) + 32;
    } else {
        tempRes.innerHTML = "Please choose one of the convensions";
    }
}


// DICE ROLLER
function rollDice() {
    const diceNum = document.getElementById("diceNum").value;
    const diceRes = document.getElementById("diceRes");
    const diceImg = document.getElementById("diceImg");
    const values = [];
    const images = [];

    for (let i = 0; i < diceNum; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice/${value}.png" alt="dice_${value}">`)

        diceRes.innerHTML = "Dice: " + values.join(", ");
        diceImg.innerHTML = images.join("")
    }
}


// PASSWORDS GENERATOR
function passGen(length, lowerCase, upperCase, numbers, symbols) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_";
    let allowedChar = "";
    allowedChar += lowerCase ? lowerChars : "";
    allowedChar += upperCase ? upperChars : "";
    allowedChar += numbers ? numberChars : "";
    allowedChar += symbols ? symbolChars : "";

    if (length <= 5) {
        return "(Password must least more than 5 characters)"
    }
    else if (allowedChar.length === 0) {
        return "At least one option must be selected"
    }
    else {
        let password = "";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * allowedChar.length);
            password += allowedChar[randomIndex];
        }
        return `Your generated password: ${password}`;
    }
    return "Something went wrong";
}

const passBtn = document.getElementById("passBtn");
passBtn.onclick = function () {
    const passLength = document.getElementById("passLength").value;
    const passLower = document.getElementById("passLower").checked;
    const passUpper = document.getElementById("passUpper").checked;
    const passNumbers = document.getElementById("passNumbers").checked;
    const passSymbols = document.getElementById("passSymbols").checked;
    const passRes = document.getElementById("passRes");

    passRes.textContent = passGen(passLength, passLower, passUpper, passNumbers, passSymbols);
}


// TEST
// function hello() {
//     console.log("Helo");
// }
// const goodbye = function() {
//     console.log("Good Bye");
// }

// setTimeout(goodbye, 3000)

// const numbers = [1, 2, 3, 4, 5, 6]
// const squeredNumbers = numbers.map(function(element) {
//     return Math.pow(element, 2);
// })
// console.log(numbers);
// console.log(squeredNumbers);

// const newhello = (name) => {
//     console.log(`Hello ${name}`);
// }
// newhello("Bun");
// console.log(Math.random);


// CLOCK
clockDisplayFun();
function clockDisplayFun() {
    const time = new Date;
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    document.getElementById('clockDisplay').innerHTML = `${hours}:${minutes}:${seconds}`;
    setTimeout(clockDisplayFun, 1000)
}


// TIMER
const btnStart = document.getElementById("btnStart");
const timerDisplay = document.getElementById("timerDisplay");

let timerHour = 0;
let timerMinute = 0;
let timerSecond = 0;
let timerId;

btnStart.onclick = function () {    
    if (btnStart.innerHTML === "Start") {
        btnStart.innerHTML = "Stop"
        timerId = setInterval(() => timerFun("Start"), 1000);
        console.log("timer started");
    } else if (btnStart.innerHTML == "Stop") {
        btnStart.innerHTML = "Reset"
        clearInterval(timerId);
        console.log("timer stoped");
    } else {
        btnStart.innerHTML = "Start"
        timerFun("Reset");
        console.log("timer reseted");
    }
}

function timerFun(timerUpdate) {       
    if (timerUpdate == "Start") {
        timerSecond++
        if (timerSecond == 60) {
            timerMinute++
            timerSecond = 0;
            if (timerMinute == 60) {
                timerHour++
                timerMinute = 0;
            }
        }
        // console.log("timer started");
    } else {
        timerHour = 0;
        timerMinute = 0;
        timerSecond = 0;
        // console.log("timer reseted");
    }
    timerSecond = timerSecond.toString().padStart(2, "0");
    timerMinute = timerMinute.toString().padStart(2, "0");
    timerHour = timerHour.toString().padStart(2, "0");    
    timerDisplay.innerHTML = `${timerHour}:${timerMinute}:${timerSecond}`
}


// test
// const section = document.getElementById("section")
// const containers = document.querySelectorAll('.btns');
// const h1 = document.createElement("h1")
// h1.textContent = "I am here";
// h1.style.color = "tomato";
// h1.style.textAlign = "center"

// section.insertBefore(h1, containers[0]);

// section.removeChild(h1)

// const testbtns = document.querySelectorAll(".testBtn")

// testbtns.forEach(btn => {
//     btn.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover")
//     })
// })


// КАМЕНЬ НОЖНИЦА БУМАГА
const gamebtns = document.querySelectorAll(".game-btns")
const player = document.querySelector(".player")
const computer = document.querySelector(".computer")
const result = document.querySelector(".result")
const choice = ["КАМЕНЬ", "НОЖНИЦА", "БУМАГА"]
let res = "";

gamebtns.forEach(btn => {
    btn.addEventListener("click", event => {
        const compChoice = choice[Math.floor(Math.random() * 3)]
        // console.log(compChoice);
        // event.target.innerHTML
        player.textContent = "player: " + event.target.innerHTML;
        computer.textContent = "computer: " + compChoice;
        if (compChoice === event.target.innerHTML) {
            res = "Ничья"
        } else {
            switch(event.target.innerHTML) {
                case "КАМЕНЬ":
                res = (compChoice == "БУМАГА") ? "Проиграл" : "Выиграл";
                break;
                case "НОЖНИЦА":
                res = (compChoice == "КАМЕНЬ") ? "Проиграл" : "Выиграл";
                break;
                case "БУМАГА":
                res = (compChoice == "НОЖНИЦА") ? "Проиграл" : "Выиграл";
                break;
            }
        }
        result.textContent = res;

        switch(res) {
            case "Проиграл":
                result.classList.add("lose");
                break;
            case "Выиграл":
                result.classList.add("win");
                break;
            case "Ничья":
                result.classList.remove("win", "lose");
                break;
        }
    })
})


// Slider
const slides = document.querySelectorAll(".slide-img")
const sliderBtns = document.querySelectorAll(".clider-btn");
let sliderIndex = 0;
let sliderInterval;
let sliderTimeout;

document.addEventListener("DOMContentLoaded", () => {
    sliderInterval = setInterval(nextFun, 6000);
})

sliderBtns.forEach(btn => {
    btn.addEventListener("click", event => {
        if (event.target.classList.contains("btn-prev")) {
            prevFun();
            clearTimeout(sliderTimeout);
            clearInterval(sliderInterval);
        } else {
            nextFun();
            clearTimeout(sliderTimeout);
            clearInterval(sliderInterval);
            sliderTimeout = setTimeout(nextFun, 6000);
        }
    })
})

function prevFun() {
    sliderIndex--
    if (sliderIndex < 0) {
        sliderIndex = slides.length - 1;
    }    
    slides.forEach(slide => slide.classList.remove("active"))
    slides[sliderIndex].classList.add("active");
}
function nextFun() {
    sliderIndex++
    if (sliderIndex >= slides.length) {
        sliderIndex = 0
    }
    slides.forEach(slide => slide.classList.remove("active"))
    slides[sliderIndex].classList.add("active");
}


// test
function first(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    }, 5000)
}
function second(callback) {
    setTimeout(() => {
        console.log("second");
        callback();
    }, 4000)
}
function third(callback) {
    setTimeout(() => {
        console.log("third");
        callback();
    }, 3000)
}
function fourth(callback) {
    setTimeout(() => {
        console.log("fourth");
        callback();
    }, 2000)
}

// first(() => {
//     second(() => {
//         third(() => {
//             fourth(() => {
//                 console.log("finish");
//             })
//         })
//     })
// })