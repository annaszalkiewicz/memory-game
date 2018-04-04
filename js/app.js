const card = document.querySelectorAll('.card');
const cards = [...card];

init();

function shuffleCards() {

    for (let i = 0; i < cards.length; i++) {
        let random = Math.floor(Math.random() * (cards.length - 1));

        let cards = cards[i];
        cards[i] = cards[random];
        cards[random] =  cards;
      }
    // return array;
}
function init() {
  shuffleCards();
}


// const cards = ['&alpha;', '&alpha;', '&beta;', '&beta;', '&gamma;', '&gamma;', '&delta;', '&delta;', '&zeta;', '&zeta;', '&eta;', '&eta;', '&lambda;', '&lambda;', '&mu;', '&mu;'];
// const front = document.querySelectorAll('.front');
// // const cards = ['alpha', 'alpha', 'beta', 'beta', 'gamma', 'gamma', 'delta', 'delta', 'zeta', 'zeta', 'eta', 'eta', 'lambda', 'lambda', 'mi', 'mi'];
// function shuffleCards(array) {
//
//   let currentIndex = cards.length;
//   let temporaryValue;
//   let randomIndex;
//
//   while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//   };
//
//   return array;
//
// };
//
// function createBoard() {
// 	for (card of cards) {
//     const newDiv = document.createElement('div');
//     newDiv.className = 'front';
//     newDiv.innerHTML = cards[card];
//     document.getElementsByClassName('card').appendChild(newDiv);
//   }
//
// }
// shuffleCards(cards);
