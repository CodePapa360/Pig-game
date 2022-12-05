'use strict';

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");

const dice = document.querySelector(".dice");

let randomDice = Math.trunc(Math.random() * 6) + 1;

const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");
let curPlayer1Score = 0;
let curPlayer2Score = 0;
let player1Score = 0;
let player2Score = 0;
const winner = 15;

const activePlayer = document.querySelector(".player--active");
const diceIsHidden = document.querySelector(".dice").style.display = "none";

document.querySelector("#current--1").textContent = curPlayer1Score;
document.querySelector("#current--2").textContent = curPlayer2Score;
document.querySelector("#score--1").textContent = player1Score;
document.querySelector("#score--2").textContent = player2Score;

let srcNumber;
const imgSourceGenerate = function (n) {
    srcNumber = `dice-${n}.png`;
    document.querySelector(".dice").src = srcNumber;
};

/////////////////////////////////
// Roll dice button functionality

btnRoll.addEventListener("click", function () {

    if (diceIsHidden) {
        document.querySelector(".dice").style.display = "block";
    }

    if (player1.classList.contains("player--active")) {

        if (player1Score < 20) {
            if (randomDice === 1) {
                document.querySelector(".player--1").classList.remove("player--active");
                document.querySelector(".player--2").classList.add("player--active");

                curPlayer1Score = 0;
                document.querySelector("#current--1").textContent = curPlayer1Score;
            } else {
                curPlayer1Score += randomDice;
                document.querySelector("#current--1").textContent = curPlayer1Score;
            }

            imgSourceGenerate(randomDice);

            randomDice = Math.trunc(Math.random() * 6) + 1;
        }


    } else if (player2.classList.contains("player--active")) {

        if (player2Score < 20) {
            if (randomDice === 1) {
                document.querySelector(".player--2").classList.remove("player--active");
                document.querySelector(".player--1").classList.add("player--active");

                curPlayer2Score = 0;
                document.querySelector("#current--2").textContent = curPlayer2Score;

            } else {
                curPlayer2Score += randomDice;
                document.querySelector("#current--2").textContent = curPlayer2Score;
            }

            imgSourceGenerate(randomDice);

            randomDice = Math.trunc(Math.random() * 6) + 1;
        }

    }
});


/////////////////////////////////
// Hold button functionality

btnHold.addEventListener("click", function () {

    if (player1.classList.contains("player--active")) {

        if (player1Score >= 20) {

            player1.classList.add("player--winner");
        } else {
            player1Score += curPlayer1Score;
            curPlayer1Score = 0;
            document.querySelector("#current--1").textContent = curPlayer1Score;
            document.querySelector("#score--1").textContent = player1Score;


            if (player1Score >= 20) {
                player1.classList.add("player--winner");
            } else {
                document.querySelector(".player--1").classList.remove("player--active");
                document.querySelector(".player--2").classList.add("player--active");
            }
        }



    } else if (player2.classList.contains("player--active")) {

        if (player2Score >= 20) {
            player2.classList.add("player--winner");
        } else {
            player2Score += curPlayer2Score;
            curPlayer2Score = 0;
            document.querySelector("#current--2").textContent = curPlayer2Score;
            document.querySelector("#score--2").textContent = player2Score;

            if (player2Score >= 20) {
                player2.classList.add("player--winner");
            } else {
                document.querySelector(".player--2").classList.remove("player--active");
                document.querySelector(".player--1").classList.add("player--active");
            }
        }

    }

    document.querySelector(".dice").src = srcNumber;

});


/////////////////////////////////////////////////
// New game button functionality (Resetting)

btnNewGame.addEventListener("click", function () {

    document.querySelector(".dice").style.display = "none";
    player1Score = 0;
    player2Score = 0;

    document.querySelector("#score--1").textContent = player1Score;
    document.querySelector("#score--2").textContent = player2Score;

    curPlayer1Score = 0;
    curPlayer2Score = 0;

    document.querySelector("#current--1").textContent = curPlayer1Score;
    document.querySelector("#current--2").textContent = curPlayer2Score;

    if (player2.classList.contains("player--active")) {
        player2.classList.remove("player--active");
        player1.classList.add("player--active");
    }

    if (player1.classList.contains("player--winner")) {
        player1.classList.remove("player--winner");
    }

    if (player2.classList.contains("player--winner")) {
        player2.classList.remove("player--winner");
    }

});