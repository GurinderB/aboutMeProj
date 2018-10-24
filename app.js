var userCountry = prompt ('What country was I born in?').toLocaleUpperCase();
console.log ('To check if the input was capitalized', userCountry);
if(userCountry === 'IN' || userCountry ==='INDIA') {
  alert ('It is a dead givaway but I am glad you know that I am from ' + userCountry + '.');
}
else {
  alert('I am surprised you don\'t know');
}

var userState = prompt ('What state am I from in U.S.?').toLocaleUpperCase();
console.log ('To check if the input was capitalized', userState);
if (userState === 'MO' || userState ==='MISSOURI') {
  alert ('Good guess that I am from ' + userState + '.');
}
else {
  alert('Nope not my state');
}

var userCusine = prompt ('What is my favourite cusine? Guess if it is Italian or Chinese or . . . . ').toLocaleUpperCase();
console.log ('To check if the input was capitalized', userCusine);
if (userCusine === 'INDIAN') {
  alert ('Right on! But again an easy guess that ' + userCusine + ' is my favourite cusine');
}
else {
  alert('It should have been an easy guess too but . . . . ');
}

var userHobby = prompt ('What is my favourite hobby. Let me make it simple, it is a board game :)').toLocaleUpperCase();
console.log ('To check if the input was capitalized', userHobby);
if (userHobby === 'CHESS') {
  alert ('You are amazing at guessing');
}
else {
  alert('You ***k! at guessing');
}

var userJob = prompt('What was my last job?').toLocaleUpperCase();
console.log ('To check if the input was capitalized', userJob);
if (userJob === 'IT' || userJob === 'COMPUTERS' || userJob === 'INFORMATION TECHNOLOGY' || userJob === 'COMPUTER SCIENCE');{
  alert('Who could have guessed!');
}
