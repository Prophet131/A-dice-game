let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const message = document.getElementById("message");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Card = document.getElementById("scoreCard1");
const player2Card = document.getElementById("scoreCard2");
const rollBtn = document.getElementById("rollbtn");
const resetBtn = document.getElementById("resetbtn");

    function resetMe() {
        rollBtn.style.display = "none";
        resetBtn.style.display = "block";
        }


rollBtn.addEventListener("click", function() {

        const randomNumber = Math.floor(Math.random() * 6) + 1;

        if (player1Turn) {
            player1Score += randomNumber;
            player1Dice.textContent = randomNumber;
            player1Card.textContent = player1Score;
            player1Dice.classList.remove("active");
            player2Dice.classList.add("active");
            message.textContent = "Player 2's Turn";

        } else {

            player2Score += randomNumber;
            player2Dice.textContent = randomNumber;
            player2Card.textContent = player2Score;
            player2Dice.classList.remove("active");
            player1Dice.classList.add("active");
            message.textContent = "Player 1's Turn";

        }

        if (player1Score >= 20) {
            message.textContent = "Player 1 is the winner";
            resetMe();
        } else if (player2Score >= 20) {
            message.textContent = "Player 2 is the winner";
            resetMe();
        }

        player1Turn = !player1Turn;

        resetBtn.addEventListener("click", function() {
            message.textContent = "Player 1's Turn";
            player1Dice.textContent = "-";
            player2Dice.textContent = "-";
            player1Card.textContent = 0;
            player2Card.textContent = 0;
            player1Score = 0;
            player2Score = 0;
            player1Turn = true;
            player2Dice.classList.remove("active");
            player1Dice.classList.add("active");
            rollBtn.style.display = "block";
            resetBtn.style.display = "none";
        })

});