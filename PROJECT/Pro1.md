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