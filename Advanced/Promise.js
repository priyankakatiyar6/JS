const Promise1 = new Promise(function(resolve,reject){
  // Do an async task
  // DB calls,crytography, network
  setTimeout(function(){
      console.log('Async task is complete');
      resolve()
  },1000)
})

Promise1.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const Promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Priyanka", Email: "priyanka@example.com"})
    },1000)
})
 
Promise3.then(function(user){
    console.log(user);
})

const Promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"priyanka",Password:"123"})
        }else{
            reject('Error:something went wrong')
        }
    },1000)
})
Promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log('The promise is resolved');
    
})

const Promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"priya",Password:"123"})
        }else{
            reject('Error:something went wrong')
        }
    },1000)
})

async function consumePromise5(){
    try{
    const response = await Promise5
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
    
}
consumePromise5()

/*async function getAllUsers(){
  try{const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  const data = await response.json()
  console.log(data);
  }
  catch(error){
    console.log(error);
     }
}
getAllUsers()*/

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))