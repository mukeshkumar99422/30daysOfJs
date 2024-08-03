// Activity 1: Understanding Promises 
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console
const promise1=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("promise 1 completed.");
    }, 2000);
});
promise1.then(function(msg){
    console.log(msg);                           //promise 1 completed.
})
// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using catch
const flag=false;
const promise2=new Promise(function(resolve,reject){
    setTimeout(() => {
        if(flag){
            resolve("promise 2 completed.");
        }
        else{
            reject("promise 2 failed.");
        }
    }, 2000);
});
promise2.then((msg)=>{
    console.log(msg);
}).catch((msg)=>{                              //catch will run:-promise 2 failed
    console.log(msg);
})

//  Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server: Chain the promises to log messages in a specific order.
fetch("https://api.github.com/users/mukeshkumar99422")
.then((result)=>{
    return result.json();                       //convert api in json format
})
.then((data)=>{
    console.log(data.id);                       //156451966
    console.log('\n');
})
.catch((error)=>{
    console.log(`E:${error}`);
})

// Activity 3: Using Async/Await 
// Task 4: Write an async function that waits for a promise to resolve and then LogS the resolved value.
async function consumePromise1(){
    try{
        const value=await promise1;
        console.log(value);
        console.log('\n');
    }
    catch(error){
        console.log(error);
    }
};
consumePromise1();
// Task 5: Write an async function that handles rejected promise using try-catch and logs the error message-->>task 4

//  Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://api.github.com/users/mukeshkumar99422")
.then((result)=>{
    console.log(result);
    console.log('\n');
})
.catch((error)=>{
    console.log(`E:${error}`);
});
// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await. 
async function fetchApi() {
    try{
        const response=await fetch("https://api.github.com");
        const response2=await response.json();
        console.log(response2);
        console.log('\n');
    }
    catch{
        const error=await fetch("https://api.github.com");
        console.log(error);
    }
}
fetchApi();
// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// Imagine we have three magical promises:
const promise3 = fetch('https://api.github.com/users/mukeshkumar99422');
const promise4 = fetch('https://api.github.com/users/NitikaSheoran');

// Now, let's gather their prophecies:
setTimeout(() => {
    Promise.all([promise3, promise4])
        .then((responses) => {
            const data1 = responses[0];
            const data2 = responses[1];

            console.log(data1);
            console.log('\n');
            console.log(data2);
            console.log('\n');
        })
        .catch((error) => {
            console.error(error.message);
        });
}, 3000);

// Task 9: Use Promise race to log the value of the first promise that resolves among multiple promises.
setTimeout(() => {
    Promise.race([promise3,promise4])
        .then((initialResolve)=>{
            console.log(initialResolve);
        })
        .catch((error)=>{
            console.log(error);
        })
}, 4000);
