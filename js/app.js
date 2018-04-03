const cards = ['alpha', 'alpha', 'beta', 'beta', 'gamma', 'gamma', 'delta', 'delta', 'zeta', 'zeta', 'eta', 'eta', 'lambda', 'lambda', 'mi', 'mi'];
const front = document.querySelectorAll('.front');

function shuffleCards(array) {

  let currentIndex = cards.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  };

  return array;

};

function createBoard() {
	shuffleCards(cards);
	for (let i = 0; i < 16; i++) {
		$('.card').appendChild('<div class="front ${cards[i]}"></div>');
	}
}
