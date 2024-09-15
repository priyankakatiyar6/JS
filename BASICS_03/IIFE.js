// Immediately Invoked Function Expression

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();
//chai();

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('Priyal')