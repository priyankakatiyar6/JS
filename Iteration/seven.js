const MyNum = [1,2,3,4,5,6,7,8,9,10]
const NewNum=MyNum.map((num)=>{return num+10})
//console.log(NewNum);

const newnum = MyNum
.map((num)=>num * 10)
.map((num)=>num+1)
.filter((num)=>num>=40)
console.log(newnum);

