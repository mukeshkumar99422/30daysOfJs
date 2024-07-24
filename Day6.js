// Activity 1: Array Creation and Access
//• Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr1=[1,2,3,4,5];
console.log(arr1);                          //[1,2,3,4,5]
console.log("\n");
//• Task 2: Access the first and last elements of the array and log them to the console. 
console.log(arr1[0]);                       //1
console.log(arr1[4]);                       //5
console.log("\n");

//Activity 2: Array Methods (Basic) 
//• Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr1.push(6);
console.log(arr1);                          //[1,2,3,4,5,6]
console.log("\n");
//• Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr1.pop();
console.log(arr1);                          //[1,2,3,4,5]
console.log("\n");
//• Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr1.shift();
console.log(arr1);                          //[2,3,4,5]
console.log("\n");
//• Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr1.unshift(1);
console.log(arr1);                          //[1,2,3,4,5]
console.log("\n");

//  Activity 3: Array Methods (lntermediate) 
//• Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const newArr1=arr1.map(function(num){
    return num*2;
})
console.log(newArr1);                      //[2,4,6,8,10]
console.log("\n");
//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const newArr2=arr1.filter((num)=>(num%2==0));
console.log(newArr2);                      //[2,4]
console.log("\n");
//• Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum=arr1.reduce((acc,curr)=>(acc+curr),0);
console.log(sum);                          //15
console.log("\n");

//  Activity 4: Array Iteration 
//• Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);                  //1,2,3,4,5
}
console.log("\n");
//• Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr1.forEach(function(num){
    console.log(num);                      //1,2,3,4,5
})
console.log("\n");

//  Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console. 
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);                        //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log("\n");

//• Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[2][2]);                  //9