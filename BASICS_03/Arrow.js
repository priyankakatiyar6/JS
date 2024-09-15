const user ={
    username: "Priya",
    price: 99,
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        //console.log(this);
    }
}
//user.welcomeMessage()
//user.username="SAM"
//user.welcomeMessage()
//console.log(this);
/*function chai(){
    let username ="Priyanka";
    console.log(this);
    //console.log(this.username); we can't access
}
chai();*/
/*const Chai = function(){
    let username ="Priyanka";
    console.log(this);
}
Chai(); */
/*const CHAI =()=>{
    let username ="Priyanka";
    console.log(this);
}
CHAI(); */

/*const AddTwo =(num1,num2)=>{
    return num1 + num2;
}
console.log(AddTwo(3,5)); */

//***********Another way to call Arrow funvtion */
//const AddTwo =(num1,num2)=> (num1 + num2);
//console.log(AddTwo(3,5));

/*const AddTwo =(num1,num2)=> ({username:"Priyanka"})
console.log(AddTwo()); */



