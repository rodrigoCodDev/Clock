// DOCUMENT ELEMENTS

var clock = document.getElementById("clock")
var clockScreen = document.getElementById("clock-screen")

var timer = document.getElementById("timer")
var countdown = document.getElementById("countdown")
var alarm = document.getElementById("alarm")


// FUNCTIONS
setInterval(() => {
    clock.textContent = luxon.DateTime.now().toFormat("HH:mm")
}, 1000)

timer.addEventListener("click", clickTimer)
countdown.addEventListener("click", clickCountdown)


// CLICK FUNCTIONS

function clickTimer() {
    let timerClock = document.createElement("div")
    timerClock.textContent = "00:00:00"

    let timerButton = document.createElement("button")
    timerButton.textContent = "Stop"

    console.log(timerClock.textContent)

    // Set interval to modify timer
    let interval = setInterval(() => {
        let timerValue = timerClock.textContent
        let time = luxon.DateTime.fromFormat(timerValue, "HH:mm:ss")

        time = time.plus({ seconds: 1 })
        timerClock.textContent = time.toFormat("HH:mm:ss")
    }, 1000)


    // Click event of button
    timerButton.addEventListener("click", () => {
        // Stop timer
        clearInterval(interval)

        // Putting finish event on the button
        timerButton.textContent = "Finish"
        timerButton.addEventListener("click", () => {
            clockScreen.removeChild(timerButton)
            clockScreen.removeChild(timerClock)
        })
    })


    // Append childs to clock screen
    clockScreen.appendChild(timerClock)
    clockScreen.appendChild(timerButton)
}


function clickCountdown() {
    // Add inputs
    let countdownInput = document.createElement("input")
    countdownInput.type = "time"
    countdownInput.step = "1"

    let countdownButton = document.createElement("button")
    countdownButton.textContent = "Confirm"

    // Add input description
    tippy(countdownInput, {
        content: "Enter time to countdown"
    })

    // Click event of button
    countdownButton.addEventListener("click", () => {
        // Get number input
        let countdownValue = countdownInput.value

        // Remove input elements
        clockScreen.removeChild(countdownInput)
        clockScreen.removeChild(countdownButton)

        // Add timer
        let countdownTimer = document.createElement("div")
        countdownTimer.textContent = countdownValue

        // Set interval to modify countdown timer
        let interval = setInterval(() => {
            // Get countdown timer number
            countdownValue = countdownTimer.textContent

            if (countdownValue != "00:00:00") {
                let time = luxon.DateTime.fromFormat(countdownValue, "HH:mm:ss")
                time = time.minus({seconds: 1})
                countdownTimer.textContent = time.toFormat("HH:mm:ss")

            } else {
                clearInterval(interval)
                clockScreen.removeChild(countdownTimer)
            }
        }, 1000)

        clockScreen.appendChild(countdownTimer)
    })

    // Append childs to clock screen
    clockScreen.appendChild(countdownInput)
    clockScreen.appendChild(countdownButton)
}

