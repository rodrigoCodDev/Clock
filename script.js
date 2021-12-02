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


countdown.addEventListener("click", clickCountdown)

function clickCountdown() {
    let countdownInput = document.createElement("input")
    countdownInput.type = "time"
    countdownInput.step = "1"

    let countdownButton = document.createElement("button")
    countdownButton.textContent = "Confirm"

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

        let interval = setInterval(() => {
            // Get number input
            countdownValue = countdownTimer.textContent

            if (countdownValue != "00:00:00") {
                let data = luxon.DateTime.fromFormat(countdownValue, "HH:mm:ss")
                data = data.minus({seconds: 1})
                countdownTimer.textContent = data.toFormat("HH:mm:ss")
            } else {
                clearInterval(interval)
                clockScreen.removeChild(countdownTimer)
            }
        }, 1000)

        clockScreen.appendChild(countdownTimer)
    })

    clockScreen.appendChild(countdownInput)
    clockScreen.appendChild(countdownButton)

    // let timerNumber = document.createElement("div")
    // clock.appendChild(timerNumber)
}



