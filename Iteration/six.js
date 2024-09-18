const Coding = ["Java","Ruby","python","cpp","JS"];
const val =Coding.forEach((item)=>{
    //console.log(item);
    return item
    
})
//console.log(val);   means for each does not return a value

const MyNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const NewNum = MyNum.filter((Num) => {
   return Num > 4
})
//console.log(NewNum);

const newnum = []
MyNum.forEach((Num) =>{
    if(Num >4){
        newnum.push(Num);
    }
})
//console.log(newnum);

const Books =[
    {title:'Book 1',genre:'Maths',publish:1990,edition: 2014},
    {title:'Book 2',genre:'englsh',publish:1999,edition: 2019},
    {title:'Book 3',genre:'Hindi',publish:2000,edition: 2020},
    {title:'Book 4',genre:'Chemistry',publish:2010,edition: 2022},
    {title:'Book 5',genre:'Physics',publish:2000,edition: 2024},
    {title:'Book 6',genre:'Maths',publish:1990,edition: 2044},
    ];

    let UserBooks = Books.filter((bk)=> bk.genre === 'Maths')
    UserBooks = Books.filter((bk)=>{return bk.publish >= 1990 && bk.genre ==="Maths" })
    console.log(UserBooks);