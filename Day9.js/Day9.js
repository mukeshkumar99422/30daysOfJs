// Activity 1: Selecting and Manipulating Elements 
// Task 1: Select an HTML element by its ID and change its text content,
document.getElementById("para1").innerText="Hello my name is mukesh kumar";
// • Task 2: Select an HTML element by its class and change its background color.
const headings=document.getElementsByClassName("heading");
headings[0].style.backgroundColor="green";

// Activity 2: Creating and Appending Elements 
// • Task 3: Create a new div element with some text content and append it to the body.
const newElement=document.createElement("div");
newElement.id="para2";
newElement.innerHTML=`
<p>These are some programing languages</p>`;
document.body.appendChild(newElement);
// • Task 4: Create a new li element and add it to an existing ul list.
const newLang=document.createElement('li');
newLang.innerText="java script";
document.querySelector("ul").appendChild(newLang);

//  Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.
const list=document.querySelector("ul");
const thirdLang=list.querySelector("li:nth-child(3)");
thirdLang.remove();
// • Task 6: Remove the last child of a specific HTML element.
const lastLang=list.querySelector("li:last-child");
lastLang.remove();

// Activity 4: Modifying Attributes and Classes 
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const img=document.querySelector("#langImg");
img.src="https://tse3.mm.bing.net/th?id=OIP.BC4Qi9ApPrFf5Sz4pHv85gHaEK&pid=Api&P=0&h=180";
// • Task 8: Add and remove a CSS class to/from an HTML element. 
img.classList.add("imgLang");
// img.className+=" imgLang";                       //can also be used(like string)
img.classList.remove("imgLang");
// img.className.replace(" imgLang","");            //can also be used(like srting)

// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph,
document.querySelector(".changeInfo").addEventListener('click',function(e){
    newElement.innerHTML=`
    <p>Want to learn these lanuages??</p>`;
});
// • Task 10: Add a mouseover event listener to an element that changes its border color.
document.querySelector(".changeInfo").addEventListener('mouseover',function(e){
    document.querySelector(".changeInfo").style.border="2px solid orange";
});