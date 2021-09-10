var affirmationButton = document.querySelector('#affirmation-button');
var mantrasButton = document.querySelector('#mantras-button');
var recieveMessageButton = document.querySelector('.recieve-msg-button');
var meditatingIcon = document.querySelector('img');
var showRandomMessage = document.querySelector('.random-message');
var whiteBoxContainer = document.querySelector('.container2');
// var radioButtons = document.querySelectorAll('input');
var radioButtons = document.querySelectorAll('input[name = "radio"]');


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


// affirmationButton.addEventListener('click', produceRandomMessage);
// mantrasButton.addEventListener('click', selectMantrasButton);
recieveMessageButton.addEventListener('click', produceRandomMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
 }

 // function createRandomAffirmation() {
 //   var value;
 //   for (var i = 0; i < radioButtons.length; i++) {
 //     if (radioButtons[i].value.checked === 'affirmation-button'); {
 //       // if (radioButtons[i].id === 'affirmation-button' && radioButtons[i].checked); {
 //       //
 //       // value = radioButtons[i].value;
 //       showRandomMessage.innerText = affirmations[getRandomIndex(affirmations)];
 //      }
 //     }
 //   }

   function createRandomAffirmation() {
     if (affirmationButton.checked === true) {
       showRandomMessage.innerText = affirmations[getRandomIndex(affirmations)];
     } else if (mantrasButton.checked === true) {
       showRandomMessage.innerText = mantras[getRandomIndex(mantras)];
     }
   }



 function createRandomMantra() {
   showRandomMessage.innerText = mantras[getRandomIndex(mantras)];
 }

function selectAffirmationButton() {

}

function selectMantrasButton() {

}


function hideMeditatingIcon() {
  meditatingIcon.classList.add('hidden');
}

function unhideMessageText() {
  showRandomMessage.classList.remove('hidden');
}

function produceRandomMessage() {
  hideMeditatingIcon();
  unhideMessageText();
  createRandomAffirmation();
}
