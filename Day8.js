// Activity 1: Template Literals
//  • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const Name = "Mukesh kumar";
const Age = 20;
const introduction = `Hello, my name is ${Name}, and I am ${Age} years old.`;
console.log(introduction);                         //Hello, my name is Mukesh kumar, and I am 20 years old.
console.log("\n");
// Task 2: Create a multi-line string using template literals and log it to the console. 
let details=`
Hello,my name is mukesh kumar,
I am btech student at NIT KKR`;
console.log(details);
// Hello,my name is mukesh kumar,
// I am btech student at NIT KKR
console.log("\n");

// Activity 2: Destructuring 
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console,
const nums=[1,2];
const [num]=nums;
console.log(num);                                   //1
const [first,second]=nums;
console.log(`first:${first}`);                      //first:1
console.log(`second:${second}`);                    //second:2
console.log("\n");
// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book={
    bookTitle:"Harry potter",
    bookAuthor:"JK rowling"
};
const {bookAuthor}=book;
console.log(bookAuthor);                             //JK rowling
//more efficient:-
const {bookTitle:title,bookAuthor:author}=book;
console.log(`Title:${title}`);                       //Title:Harry potter
console.log(`Author:${author}`);                     //Author:JK rowling
console.log("\n");

// Activity 3: Spread and Rest Operators
//  • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arr1=[1,2,3];
const arr2=[...arr1,4,5,6];
const arr3=[...arr2,7,8,9,10];
console.log(arr3);                                    //[1,2,3,4,5,6,7,8,9,10]
console.log("\n");

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result. 
function sumOfAll(...arr){
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    return sum;
}
console.log(sumOfAll(1,2,3,4,5));                     //15
console.log("\n");

// Activity 4: Default Parameters
//  • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function mul(a, b = 1) {
    return a * b;
}
const res1 = mul(5, 3);
console.log("Result with both parameters:", res1);     //15
const res2 = mul(7);
console.log("Result with default parameter:", res2);    //7
console.log("\n");

//  Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const prop1="name";
const method1="greet";
const myName="Mukesh";
const myAge=34;

const enhancedObj = {
    [prop1]:myName,                    //Computed Property Names
    [method1](){
        console.log("HELLO!!");
    },

    myAge,                             //Shorthand Property Initialization

    showDetails() {                    //Shorthand Method Definition
        console.log(`My name is ${this.name},Age is ${this.age}`);
    },
};
console.log(enhancedObj);
// {
//     name: 'Mukesh',
//     greet: [Function: greet],
//     myAge: 34,
//     showDetails: [Function: showDetails]
//   }
console.log("\n");
// • Task 9: Create an object with computed property names based on variables and log the object to the console.
const sport="football";
const enhancedObject = {
    [sport]: 23,
    cast() {
        console.log(`score in ${sport} is ${this[sport]}`);
    }
};

console.log(enhancedObject);              //{ football: 23, cast: [Function: cast] }
