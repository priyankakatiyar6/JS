
// For each loop
const Coding = ["Java","Ruby","python","cpp","JS"];
/*Coding.forEach( function (item) {
    console.log(item);
    
})*/

//Arrow Function
/*Coding.forEach((item) =>{
    console.log(item);
    
})*/

/*function printMe(item){
    console.log(item);
    
}
Coding.forEach(printMe);*/

Coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
    
})

const MyCoding =[
    {
    languageName: "javaScript",
    languageFileName: "JS"
},
{
    languageName: "Python",
    languageFileName: "P"
},
{
    languageName: "CPP",
    languageFileName: "C++"
},
]

MyCoding.forEach((item)=>{
    console.log(item.languageName);
    
})