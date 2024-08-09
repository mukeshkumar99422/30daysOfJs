// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function tryCatch() {
  try {
      throw new Error("Oops! something went wrong.");
  } catch (error) {
      console.error("Error encountered:", error.message);  //Error encountered: Oops! something went wrong.
      console.log("Try again.");          //Try again.
  }
}
tryCatch();
console.log("\n");
// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function devide(a,b){
  try{
      if(b==0){
          throw new Error("Denominator should not be zero!");
      }
      else{
          let c=a/b;
          console.log(`result:${c}`);
      }
  }
  catch(error){
      console.log("Error encountered:",error.message);
  }
}
devide(4,2);
devide(2,0);
console.log("\n")

//  Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function tryCatchFinally() {
  throw new Error("Oops! Something went wrong.");
}

try {
  tryCatchFinally();                                                   //throw error
  console.log("This line won't execute due to the error above.");      //not execute
}
catch (error) {
  console.error("Caught an error:", error.message);                    //execute
}
finally {
  console.log("Finally block executed.");                              //always execute
}  
console.log("\n");

// Activity 3: Custom Error Objects
// Task 4: Create custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
// Custom error class
class CustomError extends Error {                         //inheritance
  constructor(message) {
    super(message);                                     //invoke constructor of base class
    this.name = 'CustomError';
  }
}

function InvokeCustomError() {
  throw new CustomError('This is a custom error.');
}

try {
  InvokeCustomError();
} catch (error) {
  console.error('got custom error:', error.message);
} finally {
  console.log('Finally block executed.');
}
console.log("\n");
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class stringValidateError extends Error{
  constructor(message){
      super(message);
      this.name="stringValidateErro";
  }
}
function checkString(str){
  if(typeof str!=='string'||str.trim()==''){
      throw new stringValidateError("OOps! string is not valid.");
  }
  else{
      return str;
  }
}
try{
  let str=checkString("mukesh");
  console.log(`Your string is: ${str}`);
}
catch(error){
  console.log("error encountered:",error.message);
}
finally{
  console.log("string checking process completed.");
}
console.log("\n");

//  Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects.Use.catch() to handle the rejection and log an appropriate message to the console,
function randomBool(){
  return Math.random()<0.5;
}
const randomlyResolveReject=new Promise(function(resolve, reject){
  if(randomBool()){
    resolve("Task done.");
  }
  else{
    reject("Oops! something went wrong.");
  }
})
randomlyResolveReject
  .then((result)=>{
    console.log(`Resolved:-${result}`);
  })
  .catch((error)=>{
    console.log(`Rejected:-${error}`);
  })
  console.log("\n");
// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message
async function asyncFunction(){
  try{
    const val=randomBool();
    if(val){
      const result=await randomlyResolveReject;
      console.log(`Resolved:-${result}`);
    }
    else{
      throw new Error("Oops! something went wrong.");
    }
  }
  catch(error){
    console.log(`Rejected:-${error.message}`);
  }
}
asyncFunction();
console.log("\n");

// Activity 5: Graceful Error Handling in Fetch
//  • Task 8: Use the fetch API to request data from an invalid URL and handle the error using . catch() • Log an appropriate error message to the console.
async function fetchApi(){
  try{
    const response=await fetch("https://invalidUrl.com");
    if(!response.o){
      throw new Error("OOps API not fetched.");
    }

  }
  catch(error){
    console.log(`Error:-${error.message}`);
  }
}
fetchApi();
console.log("\n");

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message-->task 8