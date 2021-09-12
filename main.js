var affirmationRadioButton = document.querySelector('#affirmation-button');
var mantraRadioButton = document.querySelector('#mantras-button');
var recieveMessageButton = document.querySelector('.recieve-msg');
var meditatingIcon = document.querySelector('img');
var showRandomMessage = document.querySelector('.random-message');
var logInPage = document.querySelector('.log-in-page');
var userLogInInput = document.querySelector('#user-log-in');
var submitButton = document.querySelector('.submit');
var mainPage = document.querySelector('.main-page');
var personalizedGreeting = document.querySelector('.greet-user');

var affirmations = ['I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.']

var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Don’t let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.',
'Yesterday is not today.',
'The only constant is change.',
'Onward and upward.',
'I am the sky, the rest is weather.']

window.addEventListener('load', loadLogInPage);
recieveMessageButton.addEventListener('click', produceRandomMessage);
submitButton.addEventListener('click', submitUserLogIn);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
 }

function createMessageFromSelectedButton() {
  if (affirmationRadioButton.checked === true) {
    showRandomMessage.innerText = affirmations[getRandomIndex(affirmations)];
  } else if (mantraRadioButton.checked === true) {
    showRandomMessage.innerText = mantras[getRandomIndex(mantras)];
  } else {
      changeScreens(meditatingIcon, showRandomMessage);
  }
}

function changeScreens(show, hide) {
  show.classList.remove('hidden');
  hide.classList.add('hidden');
}

function loadLogInPage() {
  changeScreens(logInPage, mainPage);
}

function submitUserLogIn() {
  if (userLogInInput.value) {
    event.preventDefault();
    changeScreens(mainPage, logInPage);
    personalizedGreeting.classList.remove('hidden');
    personalizedGreeting.innerText = `Namaste, ${userLogInInput.value}`;
  }
}

function produceRandomMessage() {
  changeScreens(showRandomMessage, meditatingIcon);
  createMessageFromSelectedButton();
}
