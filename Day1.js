// Activity 1: Variable Declaration
// • Task 1: Declare a variable using var , assign it a number, and log the value to the console.
var num1=45;
console.log(num1);             //45
// • Task 2: Declare a variable using let , assign it a string, and log the value to the console.
let str1="mukesh";
console.log(str1);             //mukesh


//  Activity 2: Constant Declaration
// add to the document
// • Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
const bool1=true;
console.log(bool1);            //true


// Activity 3: Data Types • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let num2=2;
let str2="kumar";
let bool2=false;
let obj1={
    name:"mukesh",
    surname:"kumar",
    gender:"male"
}
let arr1=[1,2,3,4];
console.table([typeof(num2),typeof(str2),typeof(bool2),typeof(obj1),typeof(arr1)]);
//'number','string','boolean','object','object'


//  Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console
let msg="welcome";
console.log(msg);                      //welcome
msg="hi";
console.log(msg);                      //hi
// Activity 5: Understanding const
// • Task 6: Try reassigning a variable declared with const and observe the error.
const data="kkkkuk";
console.log(data);                     //kkkkuk
data="kkkkvk";                         //error:Assignment to constant variable 
console.log(data);
