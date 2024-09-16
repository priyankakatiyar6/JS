// If
/*const Num =47

if(Num === 47){
    console.log("Number Less Than 50");
}else{
    console.log(" Number is greater than 50")
}
console.log("Executed");

//3!=2,<,>,<=,>=,=== , !== */

/*const Score = 200
if(Score>100){
    const power ="fly";
    console.log(`User power:${power}`);
}
console.log(`User power: ${power}`);*/

/*const balance = 1000
//if(balance > 500)console.log("test"),console.log("tset2");
if(balance<500){
    console.log("less than 500");
} else if (balance < 750){
    console.log("less Than 750");
} else if(balance<1000){
    console.log("Less than 1000");
}else(balance<1000)
{
    console.log("greater or equal to 1000");
    } */

    const LoggedIn = true;
    const DebitCard = true;
    const LoggedInFromGoogle = false;
    const LoggedInFromGmail = true;
    if(LoggedIn && DebitCard ){
        console.log("Allow to buy course");
    }
    if(LoggedInFromGmail || LoggedInFromGoogle){
        console.log("USer logged In");
    }