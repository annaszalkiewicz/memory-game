const card = document.querySelectorAll('.front');
const cards = [...card];

init();

function shuffleCards() {
  for (let i = 0; i < cards.length; i++) {
      let random = Math.floor(Math.random() * (cards.length - 1));
      let a = cards[i].innerText;
      cards[i].innerText = cards[random].innerText;
      cards[random].innerText =  a;
    }
}

function init() {
  shuffleCards();
}
window.addEventListener("click", init);
