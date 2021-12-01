
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
    let timerInput = document.createElement("input")
    timerInput.type = "time"

    let timerButton = document.createElement("button")
    timerButton.textContent = "Confirm"

    // Click event of button
    timerButton.addEventListener("click", () => {
        // Get number input
        let countdownValue = timerInput.value

        // Remove input elements
        clockScreen.removeChild(timerInput)
        clockScreen.removeChild(timerButton)

        // Add timer
        let timerCountdown = document.createElement("div")
        timerCountdown.textContent = countdown

        setInterval(() => {
            if (countdownValue != "00:00") {
                let data = luxon.DateTime.fromFormat(countdownValue, "HH:mm")
                data = data.minus({minutes: 1})
                console.log(data.toFormat("HH:mm"))
            }
        }, 1000)
    })

    clockScreen.appendChild(timerInput)
    clockScreen.appendChild(timerButton)

    // let timerNumber = document.createElement("div")
    // clock.appendChild(timerNumber)
}



