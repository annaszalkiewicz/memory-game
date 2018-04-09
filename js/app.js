// VARIABLES' DEFINITIONS

const card = document.querySelectorAll('.back');
const cards = [...card];
const front = document.querySelector('.front');
const board = document.querySelector('.board');
const back = document.querySelector('.back');
const reload = document.querySelector('#reload-game');
let gameCards = document.getElementsByClassName('card');

// FUNCTIONS' DEFINITIONS

// Function to reset game

function init() {
  shuffleCards();

}
init();

// Function to shuffle cards randomly

function shuffleCards() {
  for (let i = 0; i < cards.length; i++) {
      let random = Math.floor(Math.random() * (cards.length - 1));
      let a = cards[i].innerText;
      cards[i].innerText = cards[random].innerText;
      cards[random].innerText =  a;
    }
}

// Function to add flip animation

function flipCard(event) {
  let front = event.target;
  let back = event.target.nextElementSibling;

  this.classList.add('flip');
}

// Function to remove flip class

// function removeFlip(e) {
//   const card = document.getElementsByClassName('card');
//
//   card.classList.remove('flip');
// }
// removeFlip();

// EVENT LISTENERS

// Reload game on button click
reload.addEventListener('click', init); // Reset game when clicking on reload button

// Flip card event when clicking on card
for (gameCard of gameCards) {
  gameCard.addEventListener('click', flipCard);
}
