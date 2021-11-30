// DOCUMENT ELEMENTS

var clock = document.getElementById("clock")
var clockScreen = document.getElementById("clock-screen")

var timer = document.getElementById("timer")
var alarm = document.getElementById("alarm")


// FUNCTIONS
setInterval(() => {
    clock.textContent = dayjs().format('HH:mm')
}, 1000)

timer.addEventListener("click", clickTimer)


function clickTimer() {
    let timerInput = document.createElement("input")
    timerInput.type = "number"

    let timerButton = document.createElement("button")
    timerButton.textContent = "Confirm"

    clockScreen.appendChild(timerInput)
    clockScreen.appendChild(timerButton)

    // let timerNumber = document.createElement("div")
    // clock.appendChild(timerNumber)
}



