const UserEmail = []
if(UserEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have Email");
    
}

// falsy value
// false , 0 ,-0, BigInt 0n ,"" ,null , undefined , NaN
// Truthy value
// "0", 'false' , " " , [] ,{} , function(){}

if(UserEmail.length === 0){
    console.log("Array is empty");
}

const EmptyObj = {}
if(Object.keys(EmptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator

 let val1;
 //val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15
val1 = null ?? 10 ?? 20 
console.log(val1);

// TERNIARY OPERATOR

//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("More than 80 ")
