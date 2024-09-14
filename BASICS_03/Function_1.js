/*function MyDetail() {
    console.log("Name = Priyanka")
    console.log("Age = 20")
    console.log("Location = Indore")
    console.log("Study = Bsc")
    console.log("Hobby = Cooking")
}
MyDetail(); */

/*function AddTwoNumber(Num1,Num2){
   console.log( Num1+Num2);
}
AddTwoNumber(3,6); */

function AddTwoNumber(Num1,Num2){
    /*let Result= Num1+Num2
    console.log("Priyanka");
    return Result;*/
    return Num1 + Num2
 }
 const Answer=AddTwoNumber(4,4)
 //console.log(Answer);

 function Login(UserName){
    if(!UserName){
        console.log("Please Enter UserName");
        
    }
    else{
    return`${UserName} Just Logged In`
    }
 }
 /*console.log(Login("Priyanka"));
 console.log(Login(" "));
 console.log(Login()); */

 function CalculateCartPrice(Val1,Val2,...Num1){
    return Num1
 }
 console.log(CalculateCartPrice(200,400,500,200,700));

 User={
    UserName: "Priyanka",
    Price: 300
 }
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.UserName} and Price is ${anyobject.Price}`)
 }
 //handleObject(User);
 handleObject({
    UserName: "Prachi",
    Price: 500
 })
 const MyNewArray=[200,400,900,1600]
 function returnSecondValue(getArray){
    return getArray[1];

 }
console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([200,400,600,1000]))