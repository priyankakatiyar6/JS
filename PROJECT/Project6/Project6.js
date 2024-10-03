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