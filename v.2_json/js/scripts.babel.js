'use strict';

// Get DOM elements
var word = document.querySelector('.word');
var choiceOne = document.querySelector('#choiceOne');
var choiceTwo = document.querySelector('#choiceTwo');
var choiceThree = document.querySelector('#choiceThree');
var clearButton = document.querySelector('#clear-button');

//German word library
var endpoint = 'https://raw.githubusercontent.com/kkig/German-word-json-file/master/german_library.json';

// Three answer options
var x = void 0;
var y = void 0;
var z = void 0;

var randomNumber = Math.floor(Math.random() * 3);

// Set random numbers to pick words from library
function setRandomNumber(total) {
  var isDuplicate = true;

  function pickWord(total) {
    x = Math.floor(Math.random() * total);
    y = Math.floor(Math.random() * total);
    z = Math.floor(Math.random() * total);

    if (x, y != z && x != y) {
      isDuplicate = false;
    }
  }
  while (isDuplicate) {
    pickWord(total);
  }
}

function setButton(choice_x, choice_y, choice_z, answer_x) {
  switch (randomNumber) {
    case 0:
      choiceOne.textContent = choice_x;
      choiceTwo.textContent = choice_y;
      choiceThree.textContent = choice_z;
      break;
    case 1:
      choiceOne.textContent = choice_z;
      choiceTwo.textContent = choice_x;
      choiceThree.textContent = choice_y;
      break;
    case 2:
      choiceOne.textContent = choice_y;
      choiceTwo.textContent = choice_z;
      choiceThree.textContent = choice_x;
      break;
  }
  word.textContent = answer_x;
}

function changeButton() {
  choiceOne.classList.remove('btn-outline-primary');
  choiceTwo.classList.remove('btn-outline-primary');
  choiceThree.classList.remove('btn-outline-primary');

  switch (randomNumber) {
    case 0:
      // Button One is correct
      choiceOne.classList.add('btn-success');
      choiceTwo.classList.add('btn-danger');
      choiceThree.classList.add('btn-danger');
      break;

    case 1:
      // Button Two is correct
      choiceOne.classList.add('btn-danger');
      choiceTwo.classList.add('btn-success');
      choiceThree.classList.add('btn-danger');
      break;

    case 2:
      // Button Three is correct
      choiceOne.classList.add('btn-danger');
      choiceTwo.classList.add('btn-danger');
      choiceThree.classList.add('btn-success');
      break;
  }
}

// Set up question and answers
function setQuestion() {
  fetch(endpoint).then(function (response) {
    return response.json();
  }).then(function (data) {
    setRandomNumber(data.length);
    setButton(data[x].translation, data[y].translation, data[z].translation, data[x].word);
  });
}

// Set clear button function
function stateClear() {
  randomNumber = Math.floor(Math.random() * 3); //get new question
  setQuestion();

  //reset button color
  choiceOne.classList.remove('btn-success', 'btn-danger');
  choiceTwo.classList.remove('btn-success', 'btn-danger');
  choiceThree.classList.remove('btn-success', 'btn-danger');
  choiceOne.classList.add('btn-outline-primary');
  choiceTwo.classList.add('btn-outline-primary');
  choiceThree.classList.add('btn-outline-primary');
}

//change button color for answer
choiceOne.addEventListener('click', changeButton);
choiceTwo.addEventListener('click', changeButton);
choiceThree.addEventListener('click', changeButton);

//clear button
clearButton.addEventListener('click', stateClear);

window.addEventListener('load', setQuestion);
