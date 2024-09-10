// Primitives

// 7 types String , Number , Boolean ,Null ,undefined ,symbol , Bignit

const A = 123;
const B = "SITA";
const C = false;
const D = "Riya"
const E = Symbol('123');
const F = Symbol('123');
const G = null;
console.log(F === E);





// Reference(non-primitives)

// Array ,Objects ,Functions

const Alphabet = [A,B,C,D]; // Array
let obj={
   name:"Riya"               // Object
}
const myfunction = function(){
    console.log("HELLO WORLD")
}

//888888888888888************** Memory *************************

//stack (primitive datatypes)  heap (non primitive)
 
let Channel =" youTube";
 let show ="Channel";
 show="starplus"
 console.log(Channel);
 console.log(show);

 let userone ={
    email: "Riya@gmail.com",
    Mobile :82918
 }
 let usertwo = userone;
 usertwo.email = "JAIN@gmail.com"
 console.log(userone.email)
 console.log(usertwo.email)