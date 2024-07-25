// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book={
    title:"harry potter",
    author:"jk rowling",
    year:7
}
console.log(book);                        //{ title: 'harry potter', author: 'jk rowling', year: '7' }
console.log("\n");
// • Task 2: Access and log the title and author properties of the book object.
console.log(book.author);                 //jk rowling
console.log(book["title"]);               //harry potter
console.log("\n");

// Activity 2: Object Methods 
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.detail=function(){
    return `Title is ${this.title}, Author is ${this.author}`;
}
console.log(book.detail());               //Title is harry potter, Author is jk rowling
console.log("\n");
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear=function(newYear){
    this.year=newYear;
}
book.updateYear(8);
console.log(book);
// {
//     title: 'harry potter',
//     author: 'jk rowling',
//     year: 8,
//     detail: [Function (anonymous)],
//     updateYear: [Function (anonymous)]
//   }
console.log("\n");

//  Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "National Library",
    books: [
        {
            title: "Alice's Adventures in Wonderland",
            author: "Lewis Carroll",
            year: 1865
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        }
    ]
};
console.log(library);
// {
//     name: 'National Library',
//     books: [
//       {
//         title: "Alice's Adventures in Wonderland",
//         author: 'Lewis Carroll',
//         year: 1865
//       },
//       { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
//       {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         year: 1960
//       }
//     ]
//   }
console.log("\n");
// Task 6: Access and log the name of the library and the titles of all the books in the library. 
console.log(`>>LIbrary name:${library.name}`);
console.log(">>Books:-");
library.books.forEach(function(book){
    console.log(book.title);
});
// >>LIbrary name:National Library
// >>Books:-
// Alice's Adventures in Wonderland
// Pride and Prejudice
// To Kill a Mockingbird
console.log("\n");

// Activity 4: The this Keyword 
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.titleYear=function(){
    return `Title:${this.title},Year:${this.year}`;
}
console.log(book.titleYear());                    //Title:harry potter,Year:8
console.log("\n");

//  Activity 5: Object Iteration 
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for(const prop in book){
    console.log(book[prop]);                      //prop is string (cant use '.')
};
// harry potter
// jk rowling
// 8
// [Function (anonymous)]
// [Function (anonymous)]
// [Function (anonymous)]
console.log("\n");

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));                    //[ 'title', 'author', 'year', 'detail', 'updateYear', 'titleYear' ]
console.log("\n");
console.log(Object.values(book));
// [
//     'harry potter',
//     'jk rowling',
//     8,
//     [Function (anonymous)],
//     [Function (anonymous)],
//     [Function (anonymous)]
//   ]