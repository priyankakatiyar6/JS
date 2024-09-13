// Singleton
// object.create

// object literals
const MySymbol = Symbol("Key1");
const JSUSER = {
    Name: "Priyanka",
    "Full Name": "Priyanka Katiyar",
    Age: 20,
    Location: "Indore",
    Study: "Bsc",
    [MySymbol]: "mykey1"
}
/*console.log(JSUSER.Name); // These is not a correct Way to call a object
console.log(JSUSER["Name"]);
console.log(JSUSER["Age"]);
console.log(JSUSER["Study"]);
console.log(JSUSER["Location"]);
console.log(JSUSER["Full Name"]);
console.log(JSUSER[MySymbol])
console.log(typeof JSUSER.MySymbol) */
//console.log(JSUSER);

/*JSUSER.Study= "Msc"
Object.freeze(JSUSER)
JSUSER.Study="Honours" 
console.log(JSUSER);*/

JSUSER.greeting = function() {
    console.log("HELLO JS")
    }
 JSUSER.greetingTwo = function() {
     console.log(`HELLO JS USER , ${this["Full Name"]}`);
    }
console.log(JSUSER.greeting());
console.log(JSUSER.greetingTwo());








