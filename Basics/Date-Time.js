let mydate = new Date()
/*console.log(mydate.toString());
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate); */

let myCreatedDate = new Date(2024,0,5)
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2024,0,5,3,2,1)
//console.log(myCreatedDate.toString());

//let myCreatedDate = new Date("2024-02-22")
//console.log(myCreatedDate.toDateString());

/*let MyTimeStamp = Date.now();
console.log(MyTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)) */

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{weekday:"long"})

