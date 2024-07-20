//Activity 1: Arithmetic Operations
//Task1: Write a program to add two numbers and log the result to the console
let a=2;
let b=4;
let c=a+b;
console.log(c);               //6
//Task 2: Write a program to subtract two numbers and log the result to the console
console.log(a-b);             //-2
//Task 3: Write a program to multiply two numbers and log the result to the console 
console.log(a*b);             //8
//Task 4: Write a program to divide two numbers and loe the result to the console.
console.log(a/b);             //0.5
//Task S: Write a program find the remainder when one number is divided by another and log the result to the console
console.log(a%b);              //2

//Activity 2: Assignment Operators
//Task 6: Use the += operator to add a number to a varlable and log the result to the console
let p=1;
p+=1;
console.log(p);             //2
//Task 7: Use the -= ogerator to subtract a number from a variable and log the result to the console
p-=1;
console.log(p);             //1

//Actlvity 3: Comparison Operators 
//Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let r=3;
let s=4;
console.log(r>s);             //false
console.log(r<s);             //true
//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console
let t=1;
let u=0;
let v=1; 
console.log(t<=v);             //true
console.log(t>=u);             //true
//Task 10: Write a program to compare two numbers using == and === and log the result to the console 
console.log(1==1);              //true
console.log(1=="1");            //true
console.log(1==="1");           //false

//Activity 4: Logical Operators
//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console
let num1=1;
let num2=1;
let num3=0;
console.log((num1===num2)&&(num2===num3));           //false
//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console 
console.log((num1===num2)||(num2===num3));            //true
//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console 
console.log((!(num1===num2))&&(num2===num3));         //false
//Activity 5: Ternary Operatos
//Task 14: Write a program that uses the temary operator to check if a number is positive or negative and log the result to the console
let w=4;
w>0?console.log("positive"):console.log("negative");

//Feature Request:
//1.Arithmetic Operations Script: write a scriot that perfarms basic arithmetic ooerations faddition. subtraction. multiplication. division. remainder) on two numbers and loes the results
//2.Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results. 
//3.Ternary Operator Script: write a script that uses the ternary operator to determine if a number ts positive or negative and logs the resuit