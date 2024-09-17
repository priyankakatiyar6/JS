// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i==5){
    //console.log("Equal to 5");
    }
    //console.log(i);
    }

    for (let i = 0; i <=10; i++) {
        //console.log(`Outer loop value:${i}`);
        
        for (let j = 0; j <=10; j++) {
           // console.log(`Inner Loop value ${j} and Inner loop ${i}`);            
        //console.log(i + '*' +j +'=' +i*j)
        }
    }
    let myArray =['A','B', 'C']
    //console.log(myArray.length);
    for (let k = 0; k < myArray.length; k++) {
        const element = myArray[k];
        // console.log(element);
    }

    // break and continue

    for (let i = 0; i <= 20; i++) {
        if(i==5){
       // console.log(`detected 5 `);
        break;
        }
      // console.log(`value of 1 is ${i}`);
    }

    for (let i = 0; i <= 20; i++) {
        if(i==5){
        console.log(`detected 5 `);
        continue;
        }
       console.log(`value of 1 is ${i}`);
        
        
    }