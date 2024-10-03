# Project related to DOM

## Project Link 
[Click here](http://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1
  JavaScript
```
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body")
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==='red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==='purple'){
            body.style.backgroundColor = e.target.id
        }
    })
});
```

## Project 2
  JavaScript
```
const Form = document.querySelector('form');
// This usecase give you empty value
//const Weight = parseInt(document.querySelector('#weight').value)
Form.addEventListener('submit',function(e){
  e.preventDefault()
  const Height = parseInt(document.querySelector('#height').value)
  const Weight = parseInt(document.querySelector('#weight').value)
  const Result = document.querySelector('#results')
  if(Height === '' || Height < 0 ||isNaN(Height)){
    Result.innerHTML =  `Please give a valid height ${Height}`;
  }else if(Weight === '' || Weight < 0 ||isNaN(Weight)){
    Result.innerHTML =  `Please give a valid weight ${Weight}`;
  } else{
       const BMI = (Weight/((Height*Height)/10000)).toFixed(2)
       //Result.innerHTML = `<span>${BMI}</span>`;
       Result.innerHTML = `<span>Your BMI is ${BMI} </span>`
    }
})
```


## Project 3
   JavaScript
```
const Clock = document.getElementById('clock')
//const Clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    Clock.innerHTML = date.toLocaleTimeString();
},1000);
      

```
## Project 4
   JavaScript
   ```
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


   ```

## Project 5
  JavaScript
  ```
  const Insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  Insert.innerHTML = `
  <div class ='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  
</div>`
});

  ```   
## Project 6
  JavaScript
  ```
    // Generate a Random Color
    const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color ="#"
    for(let i=0; i<6; i++){
     color += hex[Math.floor(Math.random()*16)];
     
    }
        return color;
  };
      let InterValid;
  const StartChangingColor = function(){
  if(!InterValid){
  InterValid = setInterval(ChangeBC, 1000);
  }
  function ChangeBC(){
    document.body.style.backgroundColor = randomColor();
}
};
document.querySelector('#start').addEventListener('click', StartChangingColor);
document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(InterValid);
  InterValid = null;
})

```