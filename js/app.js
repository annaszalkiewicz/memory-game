// VARIABLES' DEFINITIONS

const card = document.querySelectorAll('.back');
const cards = [...card];
const board = document.querySelector('.board');
const back = document.querySelector('.back');
const reload = document.querySelector('#reload-game');
let gameCards = document.getElementsByClassName('card');
const open = document.getElementsByClassName('flip');
let openCards = [...open];
const match = document.getElementsByClassName('match');
let matchedCards = [...match];


// FUNCTIONS' DEFINITIONS

// Function to reset game

function init() {
  shuffleCards();
  // const unflip = removeFlip();
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
  openCards.push(this);
  checkCards();

}

// Function to run when 2 cards match

function matched() {

  setTimeout(function(){
    openCards.forEach(function(card){
      card.classList.add('match');
      matchedCards.push(card);

    });
    openCards = [];
  }, 1000);
}

// Function to run when 2 cards don't match

function unmatched() {
 
  setTimeout(function(){
    openCards.forEach(function(card){
      card.classList.remove('flip');

    });
    openCards = [];
}, 500);
}

// Function to check if 2 cards match

function checkCards() {

  for (let openCard of openCards) {
    if ((openCards.length === 2)&&(openCards[0].innerText === openCards[1].innerText)) {
      matched();
      console.log("It's matching!");
    }
    else if ((openCards.length === 2)&&(openCards[0].innerText !== openCards[1].innerText)) {
      unmatched();
      console.log("It's not matching!");
      
    }
  }

}


// EVENT LISTENERS

// Reload game on button click
reload.addEventListener('click', init); // Reset game when clicking on reload button

// Flip card event when clicking on card
for (gameCard of gameCards) {
  gameCard.addEventListener('click', flipCard);
}
