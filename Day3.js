// Activity 1: If-Else Statement
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console
let num=0;
if(num>0){
    console.log("POSITIVE");
}
else if(num<0){
    console.log("NEGATIVE");
}
else{
    console.log("ZERO");
}
// Task 2: Write a program to check if a person is eligible to vote (age 18) and log the result to the console
let age=21;
if(age>18){
    console.log("ELIGIBLE");
}
else{
    console.log("NOT ELIGIBLE");
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements
let num1=1;
let num2=2;
let num3=0;
let larg;
if(num1>=num2){           //num1 can be largest
    if(num1>num3){
        larg=num1;
    }
    else{
        larg=num3;
    }
}
else{                     //num1 is not largest,chose from num2,num3
    if(num2>=num3){
        larg=num2;
    }
    else{
        larg=num3;
    }
}
console.log(`largest number is ${larg}`);

//Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console
let day=4;
switch(day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("enter valid number");
}
// Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console
// Assume the score (replace with an actual score)
const score = 50;
switch (true) {
    case score >= 90:
        console.log("GRADE IS A");
        break;
    case score >= 80:
        console.log("GRADE IS A");
        break;
    case score >= 70:
        console.log("GRADE IS A");
        break;
    case score >= 60:
        console.log("GRADE IS A");
        break;
    default:
        console.log("GRADE IS A");
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if number is even or odd and log the result to the console
// Assume the number (replace with an actual number)
let number = 42;
const result = number % 2 === 0 ? 'EVEN' : 'ODD';
console.log(`${number} IS ${result}`);

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions
// (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console
let year = 800;
const ch = (year%4==0)?(year%100!=0?1:(year%400==0?1:0)):(0);       //using ternary operator
if(ch){
    console.log("Leap");
}
else{
    console.log("Not leap");
}