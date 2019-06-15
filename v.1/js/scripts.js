let word = document.querySelector('.word');
const choiceOne = document.querySelector('#choiceOne');
const choiceTwo = document.querySelector('#choiceTwo');
const choiceThree = document.querySelector('#choiceThree');
const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);
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

function setButton() {

  switch (randomNumber) {
    case 0:
      choiceOne.innerHTML = library[x].translation;
      choiceTwo.innerHTML = library[y].translation;
      choiceThree.innerHTML = library[z].translation;
      break;
    case 1:
      choiceOne.innerHTML = library[z].translation;
      choiceTwo.innerHTML = library[x].translation;
      choiceThree.innerHTML = library[y].translation;
      break;
    case 2:
      choiceOne.innerHTML = library[y].translation;
      choiceTwo.innerHTML = library[z].translation;
      choiceThree.innerHTML = library[x].translation;
      break;

  }
  word.innerHTML = library[x].word;

}

function changeButton() {
  switch(randomNumber) {
    case 0: //One is correct
      choiceOne.classList.remove('btn-outline-primary');
      choiceOne.classList.add('btn-success');
      choiceTwo.classList.remove('btn-outline-primary');
      choiceTwo.classList.add('btn-danger');
      choiceThree.classList.remove('btn-outline-primary');
      choiceThree.classList.add('btn-danger');
      break;

    case 1: //Two is correct
      choiceOne.classList.remove('btn-outline-primary');
      choiceOne.classList.add('btn-danger');
      choiceTwo.classList.remove('btn-outline-primary');
      choiceTwo.classList.add('btn-success');
      choiceThree.classList.remove('btn-outline-primary');
      choiceThree.classList.add('btn-danger');
      break;

    case 2: //Three is correct
      choiceOne.classList.remove('btn-outline-primary');
      choiceOne.classList.add('btn-danger');
      choiceTwo.classList.remove('btn-outline-primary');
      choiceTwo.classList.add('btn-danger');
      choiceThree.classList.remove('btn-outline-primary');
      choiceThree.classList.add('btn-success');
      break;
  }
}


choiceOne.addEventListener('click', changeButton);
choiceTwo.addEventListener('click', changeButton);
choiceThree.addEventListener('click', changeButton);

setRandom();
setButton();
