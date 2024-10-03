const Form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

Form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi <18.5)
    {
      results.innerHTML = `Your BMI is ${bmi} So You are UnderWeight`
    }
    else if(bmi<24.5)
    {
      results.innerHTML = `Your BMI is ${bmi} So You are is Normal Range of BMI`
    }
    else{
      results.innerHTML = `Your BMI is ${bmi} SoYou are OverWeight`
    }
  }
});


