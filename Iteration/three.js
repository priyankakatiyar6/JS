// for of 
//[" ","",""]
//[{},{},{}]
const Arr = [1,2,3,4,5]
for(const num of Arr){
   // console.log(num);
}

const Greeting = "HELLO WORLD!"
for (const Greet of Greeting) {
    //console.log(`Each Char is ${Greet}`);
    
}

// Maps
const map = new Map()
map.set('IN', "India");
map.set('USA', "United states of America")
map.set('Fr', "France");
map.set('IN',"India");
//console.log(map);
for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}
/*const myObject = {
    game1: 'Car',
    game2: 'Ludo'                 // for of loop not iterable for object
}
for (const [key,value] of myObject) {  
    console.log(key, ':-', value);
    
}*/ 