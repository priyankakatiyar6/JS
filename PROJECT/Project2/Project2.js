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