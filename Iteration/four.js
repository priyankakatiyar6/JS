// for in loop for object

const myObject ={
    JS : 'javascript',
    CPP : 'C++',
    RB : 'Ruby',
    SWIFT : 'Swift by apple'
}
for (const key in myObject) {
   // console.log(`${key} shorcut is for ${myObject[key]}`);
    
}

//  for in loop for array

const Pro = ["js",'rb','py','java','cpp']
for (const key of Pro) {
    //console.log(key);
    
}

// for in loop for map

// Maps
const map = new Map()
map.set('IN', "India");
map.set('USA', "United states of America")
map.set('Fr', "France");
map.set('IN',"India");
//console.log(map);
for (const key in map) {
    console.log(key);
    
}