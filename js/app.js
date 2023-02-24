let secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber)
let score = 20
let = highScore = 0


const displayMessage = function(message) {
    document.querySelector(".message").textContent = message
}


document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value)
    // Когда не ввели число
    if (!guess) {
        displayMessage("Вы не ввели число!")
    // Когда угадали число
    } else if(guess === secretNumber) {
        displayMessage("Вы угадали число!")
        document.querySelector("body").style.background = "green"
        document.querySelector(".number").textContent = guess
        if (score > highScore) {
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }
    // Когда не угадали число 
    } else if(guess !== secretNumber) {
        if (score > 1) {
            if (guess > secretNumber) {
                displayMessage("Число больше!")
                score--
                document.querySelector(".score").textContent = score
            }else if(guess < secretNumber) {
                displayMessage("Число меньше!")
                score--
                document.querySelector(".score").textContent = score
            } 
            // Когда проиграли
        } else {
            displayMessage("Вы проиграли!")
            document.querySelector(".score").textContent = 0
            document.querySelector("body").style.background = "#8d2c2c"
        }
    }
})


document.querySelector(".again").addEventListener("click", function() {
    score = 20
    let secretNumber = Math.trunc(Math.random() * 20) + 1
    displayMessage("Начните угадывать!")
    document.querySelector(".score").textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.background = "black"
})
