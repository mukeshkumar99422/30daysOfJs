// Activity 1: Function Declaration 
//• Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenOdd(num){
    if(num%2==0){
        console.log("EVEN");
    }
    else{
        console.log("ODD");
    }
}
evenOdd(5);                       //ODD
console.log("\n");
//• Task 2: Write a function to calculate the square of a number and return the result.
function square(num){
    return num*num;
}
console.log(square(5));           //25
console.log("\n");

//Activity 2: Function Expression 
//• Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const max=function(num1,num2){
    if(num1>=num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log(max(4,5));             //5
console.log("\n");
//• Task 4: Write a function expression to concatenate two strings and return the result.
const concatStr=function (str1,str2){
    return str1.concat(str2);
    //return String.concat(str1,str2);        //also correct
    //return str1+str2;                       //also correct
}
console.log("mukesh ","kumar");               //mukesh kumar
console.log("\n");

//Activity 3: Arrow Functions
//• Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumOfTwoNum=(num1,num2)=>(num1+num2);
console.log(sumOfTwoNum(1,1));                 //2
console.log("\n");
//• Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const includeChar=(string,character)=>{
    return string.includes(character);
}
console.log(includeChar("mukesh",'k'));         //true
console.log("\n");

//Activity 4: Function Parameters and Default Values 
//• Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function mul(num1,num2=1){
    return num1*num2;
}
console.log(mul(2,4));                           //8
console.log(mul(5));                             //5
console.log("\n");
//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greet=(name,age=40)=>{
    return (`Hii ${name} you retired at the age of ${age}`);
}
console.log(greet("mukesh",45));                 //Hii mukesh you retired at the age of 45
console.log(greet("rahul"));                     //Hii rahul you retired at the age of 40
console.log("\n");

//Activity 5: Higher-Order Functions
//• Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function welcome(){
    console.log("!!!WELCOME!!!");
};

function greetManyTimes(func,times){
    for(let i=0;i<times;i++){
        func();
    }
};
greetManyTimes(welcome,4);
// !!!WELCOME!!!
// !!!WELCOME!!!
// !!!WELCOME!!!
// !!!WELCOME!!!

//• Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function addOne(num=0){
    if(num%2==0){
        return num;
    }
    else{
        return num+1;
    }
};

function half(num=0){
    return num/2;
};

function mid(func1,func2,value){
    let temp1=func1(value);
    let temp2=func2(temp1);
    return temp2;
};

console.log(mid(addOne,half,5));                  //3
