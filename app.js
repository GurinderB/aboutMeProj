"use strict";

var numCorrect = 0;
//  First question.
var userCountry = prompt('What country was I born in?').toLocaleUpperCase();
console.log('To check if the input was capitalized', userCountry);
if (userCountry === 'IN' || userCountry === 'INDIA') {
  alert('It is a dead givaway but I am glad you know that I am from ' + userCountry + '.');
  numCorrect++;
}
else {
  alert('I am surprised you don\'t know');

}

//  Second question.
var userState = prompt('What state am I from in U.S.?').toLocaleUpperCase();
console.log('To check if the input was capitalized', userState);
if (userState === 'MO' || userState === 'MISSOURI') {
  alert('Good guess that I am from ' + userState + '.');
  numCorrect++;
}
else {
  alert('Nope not my state');

}

//  Third question.
var userCusine = prompt('What is my favourite cusine? Guess if it is Italian or Chinese or . . . . ').toLocaleUpperCase();
console.log('To check if the input was capitalized', userCusine);
if (userCusine === 'INDIAN') {
  alert('Right on! But again an easy guess that ' + userCusine + ' is my favourite cusine');
  numCorrect++;
}
else {
  alert('It should have been an easy guess too but . . . . ');

}

//  Forth question.
var userHobby = prompt('What is my favourite hobby. Let me make it simple, it is a board game :)').toLocaleUpperCase();
console.log('To check if the input was capitalized', userHobby);
if (userHobby === 'CHESS') {
  alert('You are amazing at guessing');
  numCorrect++;
}
else {
  alert('You ***k! at guessing');
}

//  Fifth question.
var userJob = prompt('What was my last job?').toLocaleUpperCase();
console.log('To check if the input was capitalized', userJob);
if (userJob === 'IT' || userJob === 'COMPUTERS' || userJob === 'INFORMATION TECHNOLOGY' || userJob === 'COMPUTER SCIENCE') {
  alert('Who could have guessed!');
  numCorrect++;
}
else {
  alert('It was an easy guess but you missed!');
}

//  Sixth question.
var guessNum = parseInt(prompt('Guess how many years I have been in U.S.! It is between 8 - 20 years. You only get 4 tries'));
console.log('To check if the input was parsed to integer');
//if (guessNum === null) {guessNum = parseInt(prompt('Enter a number!'));}

console.log('To check if value came in as null', guessNum);

var counter = 1;
while (guessNum !== 12 && counter < 4) {
  if (guessNum < 12) {
    guessNum = parseInt(prompt('Your guess is low, guess again'));
    counter++;
  }
  else if (guessNum > 12) {
    guessNum = parseInt(prompt('Your guess is High, guess again'));
    counter++;
  }
  else {
    guessNum = parseInt(prompt('Enter a number, try again'));
    counter++;
  }
}
if (guessNum === 12) {
  alert('Good guess! I can\'t believe I have been in United States for ' + guessNum + ' years.');
}
else {
  alert('You are out of tries!');
}

//Seventh question

var guessCountry = prompt('Guess the countries I have visited other than India or U.S.!').toLocaleUpperCase();
console.log('To check if the input was converted to uppercase', guessCountry);
var countryVis = ['NETHERLAND', 'CYPRUS', 'BELGIUM'];
var correct = false;
var counter2 = 0;
while (counter2 <= 4) {
  for (var i = 0; i <= countryVis.length; i++) {
    if (guessCountry === countryVis[i]) {
      correct = true;
    }
  }
  if (correct === true) {       // you can also use if(correct) for 'true' value of the boolian 'correct' also can use if(!correct).
    alert('Good guess!');
    numCorrect++;
    break;
  }
  else {
    guessCountry = prompt(' Wrong guess, try again. You get to try for 7 time total.').toLocaleUpperCase();
    counter2++;
  }
}
if (counter2 === 6) {
  alert('You are out of tries');

}

// to check number of correct answers
if (numCorrect > 4) {
  alert('You got ' + numCorrect + ' out of 7 questions. Great Job!'); //alert if total correct greater than 4
} else {
  alert('You only got ' + numCorrect + ' out of 7 questions');
}
