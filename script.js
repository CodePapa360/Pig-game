'use strict';

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");

const dice = document.querySelector(".dice");

let randomDice = Math.trunc(Math.random() * 6) + 1;

const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");
const player = document.querySelector(".player");
let curPlayer1Score = 0;
let curPlayer2Score = 0;
let player1Score = 0;
let player2Score = 0;

const activePlayer = document.querySelector(".player--active");
const diceIsHidden = document.querySelector(".dice").style.display = "none";


document.querySelector("#current--1").textContent = curPlayer1Score;
document.querySelector("#current--1").textContent = curPlayer2Score;
document.querySelector("#score--1").textContent = player1Score;
document.querySelector("#score--2").textContent = player2Score;


const imgSourceGenerate = function(n) {
    let srcNumber = `dice-${n}.png`;
    document.querySelector(".dice").src = srcNumber;
};



/////////////////////////////////
// Roll dice button functionality

btnRoll.addEventListener("click", function() {

    if (diceIsHidden) {
        document.querySelector(".dice").style.display = "block";
    }

    imgSourceGenerate(randomDice);

    if (player1.classList.contains("player--active")) {
        if (randomDice === 1) {
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--2").classList.add("player--active");

            curPlayer1Score = 0;
            document.querySelector("#current--1").textContent = curPlayer1Score;
        } else {
            curPlayer1Score += randomDice;
            document.querySelector("#current--1").textContent = curPlayer1Score;
        }


    } else if (player2.classList.contains("player--active")) {

        if (randomDice === 1) {
            document.querySelector(".player--2").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--active");

            curPlayer2Score = 0;
            document.querySelector("#current--2").textContent = curPlayer2Score;

        } else {
            curPlayer2Score += randomDice;
            document.querySelector("#current--2").textContent = curPlayer2Score;
        }

    }

    randomDice = Math.trunc(Math.random() * 6) + 1;
});



/////////////////////////////////
// Hold button functionality

btnHold.addEventListener("click", function() {

    if (player1.classList.contains("player--active")) {


        player1Score += curPlayer1Score;
        document.querySelector("#score--1").textContent = player1Score;

        document.querySelector(".player--1").classList.remove("player--active");
        document.querySelector(".player--2").classList.add("player--active");


    } else if (player2.classList.contains("player--active")) {

        player2Score += curPlayer2Score;
        document.querySelector("#score--2").textContent = player2Score;

        document.querySelector(".player--2").classList.remove("player--active");
        document.querySelector(".player--1").classList.add("player--active");
    }
});


/////////////////////////////////
// New game button functionality

btnNewGame.addEventListener("click", function() {

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

    player.classList.remove("player--winner");

});