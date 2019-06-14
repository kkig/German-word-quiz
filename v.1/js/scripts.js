let word = document.querySelector('.word');
const choiceOne = document.querySelector('#choiceOne');
const choiceTwo = document.querySelector('#choiceTwo');
const choiceThree = document.querySelector('#choiceThree');
let x;
let y;
let z;

function setRandom() {
  let isDuplicate = true;

  function pickWord() {
    x = Math.floor(Math.random() * library.length);
    y = Math.floor(Math.random() * library.length);
    z = Math.floor(Math.random() * library.length);
    if (x != y && y != z && x != z) {
      isDuplicate = false;
    }

  }

  while (isDuplicate) {
    pickWord();
  }
}

function changeButton() {
  choiceOne.classList.remove('btn-outline-primary');
  choiceOne.classList.add('btn-success');
  choiceTwo.classList.remove('btn-outline-primary');
  choiceTwo.classList.add('btn-danger');
  choiceThree.classList.remove('btn-outline-primary');
  choiceThree.classList.add('btn-danger');
}


choiceOne.addEventListener('click', changeButton);
choiceTwo.addEventListener('click', changeButton);
choiceThree.addEventListener('click', changeButton);

setRandom();
word.innerHTML = library[x].word;
choiceOne.innerHTML = library[x].translation;
choiceTwo.innerHTML = library[y].translation;
choiceThree.innerHTML = library[z].translation;
