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
const endCloseButton2 = document.getElementById('end-close-button-2');
const endGameMessage = document.getElementById('end-message');

// FUNCTIONS' DEFINITIONS

// Function to start game on load/reload

window.onload = function () {
	showStartModal();
};

// Function to reset game

function startGame() {

	closeStartModal();
	shuffleCards();
	showTime();
}

// Function to shuffle cards randomly

function shuffleCards() {
	for (let i = 0; i < cards.length; i++) {
		let random = Math.floor(Math.random() * (cards.length - 1));
		let a = cards[i].innerText;
		cards[i].innerText = cards[random].innerText;
		cards[random].innerText = a;
	}
}

// Function to add flip animation

function flip(event) {

	let card = event.target;

	if (card.classList.contains('card')) {
		card.classList.add('flip');
		openCards.push(card);
		checkCards();
	}

}

function flipCard(event) {

	let front = event.target;
	let back = event.target.nextElementSibling;

	this.classList.add('flip');
	openCards.push(this);
	checkCards();
}

// Function to run when 2 cards match

function matched() {

	setTimeout(function () {
		openCards.forEach(function (card) {
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

	setTimeout(function () {
		openCards.forEach(function (card) {
			card.classList.remove('flip');
		});
		openCards = [];
	}, 500);
}

// Function to check if 2 cards match

function checkCards() {

	for (let openCard of openCards) {
		if ((openCards.length === 2) && (openCards[0].innerText === openCards[1].innerText)) {
			moveCounter();
			matched();

		}
		else if ((openCards.length === 2) && (openCards[0].innerText !== openCards[1].innerText)) {
			moveCounter();
			unmatched();
		}
	}

}
function moveCounter() {

	moves += 1 / 2;
	movesCount.innerText = moves;
	checkStars();

}

function checkStars() {

	const threeStars = document.getElementById('three-stars');
	const twoStars = document.getElementById('two-stars');

	if ((moves > 15) && (moves < 25)) {
		threeStars.style.color = '#000';
		stars = '2 stars';
	}
	else if ((moves > 25) && (moves < 35)) {
		twoStars.style.color = '#000';
		stars = '1 star';
	}
	else if (moves > 35) {
		gameOver();
	}
	else {
		stars = '3 stars';
	}
}

// Function to end game if moves > 35

const gameOverModal = document.getElementById('game-over-modal');

function gameOver() {
	gameOverModal.style.display = 'block';
}

// Function to get timer working

function showTime() {

	time = setInterval(getTime, 1000);

	function getTime() {
		timer.innerHTML = `${minutes}m ${seconds}s`;
		seconds++;

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
	}, 1000);

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
reload.addEventListener('mousedown', startGame); // Reset game when clicking on reload button

// Flip card event when clicking on card
for (gameCard of gameCards) {
	gameCard.addEventListener('mousedown', flipCard);
}

// Event to close modal on click close button
closeButton.addEventListener('mousedown', closeStartModal);
endCloseButton.addEventListener('mousedown', closeEndModal);
endCloseButton2.addEventListener('mousedown', closeEndModal);

// Event to close modal on click anywhere
window.addEventListener('mousedown', closeStartModal);
window.addEventListener('mousedown', closeEndModal);

// Event to start game on click button
startButton.addEventListener('mousedown', startGame);

// TOUCH EVENTS FOR MOBILE DEVICES AND TABLETS

// Reload game on button click
reload.addEventListener('touchstart', e => {e.preventDefault(); startGame;}); // Reset game when clicking on reload button

// Flip card event when clicking on card
for (gameCard of gameCards) {
	gameCard.addEventListener('touchstart', e => {e.preventDefault(); flipCard;} );
}

// Event to close modal on click close button
closeButton.addEventListener('touchstart', closeStartModal);
endCloseButton.addEventListener('touchstart', closeEndModal);
endCloseButton2.addEventListener('touchstart', closeEndModal);

// Event to close modal on click anywhere
window.addEventListener('touchstart', closeStartModal);
window.addEventListener('touchstart', closeEndModal);

// Event to start game on click button
startButton.addEventListener('touchstart', startGame);


// Play again button events

const playAgain = document.getElementById('play-again');

playAgain.addEventListener('mousedown', function () {
	window.location.reload();
	startGame();
});

playAgain.addEventListener('keydown', function (event) {
	if (event.keyCode === 13) {
		window.location.reload();
		startGame();
	}
});

// ANIMATED BACKGROUND

const letters = {

	// Array of letters

	chars: ['&alpha;', '&Alpha;', '&beta;', '&Beta;', '&gamma;', '&Gamma;', '&delta;', '&Delta;', '&epsilon;', '&Epsilon;', '&zeta;', '&Zeta;', '&eta;', '&Eta;', '&theta;', '&Theta;', '&iota;', '&Iota;', '&kappa;', '&Kappa;', '&lambda;', '&Lambda;', '&mu;', '&Mu;', '&nu;', '&Nu;', '&xi;', '&Xi;', '&omicron;', '&Omicron;', '&pi;', '&Pi;', '&rho;', '&Rho;', '&sigma;', '&Sigma;', '&sigmaf;', '&tau;', '&Tau;', '&Upsilon;', '&upsilon;', '&phi;', '&Phi;', '&Chi;', '&chi;', '&psi;', '&Psi;', '&omega;', '&Omega;'],

	// Function to create each letter every 300ms

	repeat: function () {
		window.setInterval(letters.create, 100);
	},

	// Function to create letter and place it in DOM structure

	create: function () {
		letters.container = document.getElementById('animation');
		character = letters.chars[Math.floor(Math.random() * letters.chars.length)];
		newSpan = document.createElement('span');
		letters.container.appendChild(newSpan);
		newSpan.innerHTML = character;
		letters.animate(newSpan);
	},

	// Function setting to style each letter

	animate: function (newSpan) {
		let pos = Math.random() * 100;
		let size = Math.random() * (300 - 20) + 20;
		let duration = Math.random() * (20 - 5) + 5;
		const color = ['#9e2021;', '#155f60;', '#6c943e;', '#1e7f3f;'];
		let randomColor = color[Math.floor(Math.random() * color.length)];
		newSpan.style.cssText = `margin-left: ${pos}vw; font-size: ${size}px; animation-duration: ${duration}s; color: ${randomColor}`;
		window.setTimeout(letters.delete, duration * 1000, newSpan);
	},

	// Function to delete each letter when animation is finished

	delete: function (newSpan) {
		letters.container.removeChild(newSpan);
	}
};

// Event listener to start letters animation when document is loaded

document.addEventListener('DOMContentLoaded', letters.repeat);

// Function to create keyboard shortcuts

function shortcuts(event) {

	if (event.keyCode === 27 ) {  // ESCAPE key closes modal
		closeStartModal();
		closeEndModal();
	}

	// ENTER key opens card
	else if ((event.keyCode === 13)&&(event.target.classList.contains('card'))&&(event.target == document.activeElement)) { 
		flip(event);
	} 

	else if ((event.keyCode === 13)&&(startButton)) {
		closeEndModal();
		startGame();
	}

	// SPACEBAR key opens card
	else if ((event.keyCode === 32)&&(event.target.classList.contains('card'))&&(event.target == document.activeElement)) {
		flip(event);
	} 

}

// Event listener to keyboard events
document.addEventListener('keydown', shortcuts);