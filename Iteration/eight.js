const Array = [1,2,3,4,5];

const Total = Array.reduce(function (acc,current) {
   //console.log(`Acc: ${acc} and Current: ${current}`);
   return acc + current
    
},2)
//console.log(Total);

const MyTotal = Array.reduce((acc,curr)=> 
    {
        return acc + curr

    },2)

//console.log(MyTotal);

const Cart = [
    {
        ItemName: "DSA",
        price: 999
    },
    {
        ItemName: "JS",
        price: 1999
    },
    {
        ItemName: "BootStrap",
        price: 2999
    }
]

const PriceToPay=Cart.reduce((acc,item)=> 
    {return acc +item.price 

    },0)
    console.log(PriceToPay);
    