// VARIABLES' DEFINITIONS

const card = document.querySelectorAll('.back');
const cards = [...card];
const front = document.querySelector('.front');
const board = document.querySelector('.board');
const back = document.querySelector('.back');
const reload = document.querySelector('#reload-game');
let gameCard = document.getElementsByClassName('card');

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

// function flipCard() {
//   let card = document.getElementsByClassName('.card');
//
//   card.classList.add('flip');
// }

$('.card').on('click', function flipCard() {
  $(this).addClass('flip');
});


// EVENT LISTENERS

// Reload game on button click
reload.addEventListener('click', init); // Reset game when clicking on reload button

// gameCard.addEventListener('click', flipCard); // Flip card event when clicking on card
