let sum = 0;
let cardArr = [];

let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "",
    chips: 100
}
player.name = prompt("Enter your name");
alert("Congrats " + player.name + " you got $100 Free Credit")
let playerEl = document.getElementById("player-el");
playerEl.innerHTML = player.name + " $" + player.chips;


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return (randomNumber);
    }


}

function startGame() {

    // let firstCard = getRandomCard();
    // let secondCard = getRandomCard();
    // cardArr = [firstCard, secondCard];
    cardArr[0] = getRandomCard();
    cardArr[1] = getRandomCard();
    sum = cardArr[0] + cardArr[1];
    // sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You have got a Blackjack";
        hasBlackJack = true;
    } else {
        message = "You are out of game";
        isAlive = false;
    }
    messageEl.innerHTML = message;

    cardsEl.innerHTML = "Cards: ";
    for (let i = 0; i < cardArr.length; i++) {
        cardsEl.innerHTML += cardArr[i] + " ";
    }
    sumEl.innerHTML = "Sum: " + sum;

}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomCard();
        cardArr.push(card);
        sum += card;
        renderGame();
    }
}