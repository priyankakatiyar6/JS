//var C =100
const B = 500
if(true){
    let A = 10;
    const B =30;
    //console.log("Value of A is" , A);
   // var C = 50; we not recommand to use var
}
//console.log(A);  it does not provide value because A is not  declare in global scope
//console.log(B);
//console.log(C);

//************************Scopes in Array*******************
/*for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}*/

//************************* Nested Scope **********/

/*function One(){
    const UserName = "Priyanka"
    function Two(){
        const website = "Youtube"
        console.log(UserName + website);
    }
    //console.log(website);
    //Two()
}
//console.log(UserName);
One() ;*/


   if(true){
    const UserName = "Priyanka"
      if(UserName === "Priyanka"){
        const website = "Youtube"
        console.log(UserName+website);
    }
    //console.log(website);
    }
 //console.log(UserName); 

 //****************** Interesting ***************/

 console.log(AddOne(6));
 function AddOne(Num1) {
    return Num1 + 2
  
 }

 
 console.log(ADD(8));
 const ADD = function(Num){
    return Num + 1;
 }
 
