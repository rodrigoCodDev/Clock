var clock = document.getElementById("clock")

setInterval(() => {
    clock.textContent = dayjs().format('HH:mm')
}, 1000)
