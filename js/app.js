// VARIABLES' DEFINITIONS

const card = document.querySelectorAll('.back');
const cards = [...card];
const reload = document.querySelector('#reload-game');
let gameCards = document.getElementsByClassName('card');
const open = document.getElementsByClassName('flip');
let openCards = [...open];
const match = document.getElementsByClassName('match');
let matchedCards = [...match];
const movesCount = document.getElementById('moves-counter');
let moves = 0;
let minutes = 0;
let seconds = 0;
let time, gameCard, stars;
const timer = document.querySelector('.time-counter');
const startModal = document.getElementById('start-modal');
const startButton = document.getElementById('start-button');
const closeButton = document.getElementById('close-button');
const endModal = document.getElementById('end-modal');
const endCloseButton = document.getElementById('end-close-button');
const endGameMessage = document.getElementById('end-message');

// FUNCTIONS' DEFINITIONS

// Function to start game on load/reload

window.onload = function () {
	startGame();
};

// Function to reset game

function startGame() {
	shuffleCards();
	showStartModal();
	moves = 0;
	minutes = 0;
	seconds = 0;
	showTime();
}

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

			if (matchedCards.length === 16) {
				endGame();
			}  

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
			moveCounter();
			matched();

		}
		else if ((openCards.length === 2)&&(openCards[0].innerText !== openCards[1].innerText)) {
			moveCounter();
			unmatched();
		}
	}
  
}
function moveCounter() {

	moves+=1/2;
	movesCount.innerText = moves; 
	checkStars();

}

function checkStars() {

	const threeStars = document.getElementById('three-stars');
	const twoStars = document.getElementById('two-stars');
	const oneStar = document.getElementById('one-star');

	if ((moves > 15)&&(moves < 25)) {
		threeStars.style.color = '#000';
		stars = '2 stars';
	} 
	else if ((moves > 25)&&(moves < 35)) {
		twoStars.style.color = '#000';
		stars = '1 star';
	}
	else if (moves > 35) {
		oneStar.style.color = '#000';
		stars = '0 stars';
	}
	else {
		stars = '3 stars';
	}
}

// Function to get timer working

function showTime() {

	time = setInterval(getTime, 1000);
  
	function getTime() {
		timer.innerHTML = `${minutes}m ${seconds}s`;
		seconds ++;

		if (seconds === 60) {
			minutes += 1;
			seconds = 0;
		}
    
	}
  
}

//Function to stop timer

function stopTimer() {
	clearInterval(time);
}

// Function to run at the end of game

function endGame() {
	stopTimer();
	setTimeout(() => {
		endModal.classList.add('show');
		message();
	}, 2000);
  
}

// MODAL ON THE START OF GAME

// Function to show modal on window load

function showStartModal() {
	startModal.style.display = 'block';
}

// Function to close modal

function closeStartModal() {
	startModal.style.display = 'none';
}

// MODAL AT THE END OF GAME

// Function to close modal

function closeEndModal() {

	endModal.classList.remove('show');
}

function message() {
	endGameMessage.innerHTML = `You finished game in ${timer.innerHTML} and ${moves} moves. You gained ${stars}.`;
}

// EVENT LISTENERS

// Reload game on button click
reload.addEventListener('click', startGame); // Reset game when clicking on reload button

// Flip card event when clicking on card
for (gameCard of gameCards) {
	gameCard.addEventListener('click', flipCard);
}

// Event to close modal on click close button
closeButton.addEventListener('click', closeStartModal);
endCloseButton.addEventListener('click', closeEndModal);

// Event to close modal on click anywhere
window.addEventListener('click', closeStartModal);
window.addEventListener('click', closeEndModal);

// Event to start game on click button
startButton.addEventListener('click', startGame);