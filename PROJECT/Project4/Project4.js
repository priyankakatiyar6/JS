let RandomNumber = (parseInt(Math.random()*100+1));
const Submit = document.querySelector('#sub');
const UserInput = document.querySelector('#guessField');
const GuessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const LowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');
const P = document.querySelector('p');

let PrevGuess =[]
let NumGuess = 1
let PlayGame = true;

if(PlayGame){
  Submit.addEventListener('click', function (e){
    e.preventDefault();
    const Guess= parseInt(UserInput.value);
    console.log(Guess);
    ValidateGuess(Guess);
    });
}

function ValidateGuess(Guess){
  if(isNaN(Guess)){
    alert('Please Enter a valid Number')
  }else if(Guess < 1){
    alert('Please Enter a Number More than 1')

  }else if(Guess > 100){
    alert('Please Enter a Numbr less than 100')
  }else{
    PrevGuess.push(Guess)
    if(NumGuess === 11){
      DisplayGuess(Guess)
      DisplayMessage(`Game Over.Random Number was ${RandomNumber}`)
      EndGame();
    } else{
      DisplayGuess(Guess);
      CheckGuess(Guess);
    }
  }


}
function CheckGuess(Guess){
  if(Guess === RandomNumber){
     DisplayMessage(`You Guessed it right`)
     EndGame()
  }else if(Guess < RandomNumber){
    DisplayMessage(`Number is Too low`)
  }else if(Guess > RandomNumber){
    DisplayMessage(`Number is Too high`)
  }
}
function DisplayGuess(Guess){
  UserInput.value = ''
  GuessSlot.innerHTML += `${Guess},`
  NumGuess++;
  Remaining.innerHTML = `${11 - NumGuess}`

}
function DisplayMessage(message){
 LowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function EndGame(){
   UserInput.value = ''
   UserInput.setAttribute('disabled','')
   P.classList.add('button')
   P.innerHTML = `<h2 id = "New Game">Start New Game</h2>`;
   StartOver.appendChild(P)
   PlayGame = false;
   NewGame();
}
function NewGame(){
  const NewGameButton = document.querySelector('#newGame')
  NewGameButton.addEventListener('click',function(e){
    RandomNumber = parseInt(Math.random()*100 +1);
    PrevGuess =[]
    NumGuess = 1
    GuessSlot.innerHTML=''
    Remaining.innerHTML = `${11 - NumGuess}`;
    UserInput.removeAttribute('disabled');
    StartOver.removeChild(P);
    PlayGame = true
  })


}
