// tabs
const links = document.querySelectorAll('.tabs-item');
const tabs = document.querySelectorAll('.tab-content-item');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        for (let a = 0; a < links.length; a++) {
            links[a].classList.remove("active")
            tabs[a].classList.remove("active")
        }

        links[i].classList.add("active")
        tabs[i].classList.add("active")
    })
}

// clock
const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    digitalClock = document.querySelector('.clock-digital');

function clock() {
    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;


    sec.style = `transform: rotate(${second}deg);`;
    min.style = `transform: rotate(${minutes}deg);`;
    hour.style = `transform: rotate(${hours}deg);`;

    digitalClock.innerHTML = String(time.getHours()).padStart(2, '0') + " : " + String(time.getMinutes()).padStart(2, '0');
    setTimeout(() => clock(), 1000)
}

clock()

// stopwatch
const stopwatchBtn = document.getElementById("stopwatch-btn"),
    stopwatchNums = document.querySelector(".stopwatch-numbers");

let stopwatchHour = 0;
let stopwatchMinute = 0;
let stopwatchSecond = 0;
let stopwatchId;

stopwatchBtn.addEventListener('click', function () {
    if (this.classList.length === 0) {
        this.classList.add("stop")
        this.innerHTML = "stop"
        stopwatchId = setInterval(() => stopwatch("Start"), 1000);
    }
    else if (this.classList.contains("stop")) {
        this.classList.remove("stop")
        this.classList.add("clear")
        this.innerHTML = "clear"
        clearInterval(stopwatchId)
    }
    else {
        this.classList.remove("stop")
        this.classList.remove("clear")
        this.innerHTML = "start"
        stopwatch("Reset");
    }
})

function stopwatch(update) {
    if (update == "Start") {
        console.log("started");
        stopwatchSecond++
        if (stopwatchSecond == 60) {
            stopwatchMinute++
            stopwatchSecond = 0;
            if (stopwatchMinute == 60) {
                stopwatchHour++
                stopwatchMinute = 0;
            }
        }
    } else {
        stopwatchHour = 0;
        stopwatchMinute = 0;
        stopwatchSecond = 0;
    }
    stopwatchSecond = stopwatchSecond.toString().padStart(2, "0");
    stopwatchMinute = stopwatchMinute.toString().padStart(2, "0");
    stopwatchHour = stopwatchHour.toString().padStart(2, "0");
    stopwatchNums.innerHTML = `${stopwatchHour} : ${stopwatchMinute} : ${stopwatchSecond}`
}