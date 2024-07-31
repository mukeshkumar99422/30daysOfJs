// Activity 1: Basic Event Handling 
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
let para1=document.querySelector(".para1");
const changePara1=document.querySelector(".changePara1");
changePara1.addEventListener('click',function(e){
    para1.innerHTML=`
    Twinkle twinkle little star<br>
    how are wonder what you are`;
});
// Task 2: Add a double-click event listener to an image that toggles its visibility.
let isVisible=true;
let monkeyImg=document.getElementById("monkeyImg");
monkeyImg.addEventListener("dblclick",function(e){
    isVisible=!isVisible;
    if(isVisible){
        monkeyImg.style.display="block";
    }
    else{
        monkeyImg.style.display="none";
    }
})

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
const event=changePara1.addEventListener('mouseover',function(e){
    changePara1.style.backgroundColor="rgb(100,100,100)";
});
// Task 4; Add a mouseout event listener to an element that resets its background color. 
changePara1.addEventListener('mouseout',function(e){
    changePara1.style.backgroundColor="rgb(240,240,240)";
});

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
window.addEventListener('keydown',function(e){
    this.document.querySelector('.key').innerHTML=`${e.key===" "?"space":e.key}`;
});
// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph. 
const input=document.getElementById("input");
const output=document.getElementById("output");
input.addEventListener("keyup",function(e){
    output.innerText=e.target.value;
})

// Activity 4: Form Events 
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form=document.getElementById("form");
const formInput=document.getElementById("formInput");
const formSubmit=document.getElementById("formSubmit");
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(formInput.value);
})
// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const select=document.getElementById("select");
const selectOutput=document.getElementById("selectOutput");
select.addEventListener("change",function(e){
    e.preventDefault();
    selectOutput.innerText=select.value;
})

// Activity 5: Event Delegation 
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let list=document.getElementById("list");
list.addEventListener("click",function(e){
    if(e.target.tagName=='LI'){
        console.log(e.target.innerText);
    }
})
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const newAnimalInput=document.getElementById("newAnimalInput");
const newAnimalAdd=document.getElementById("newAnimalAdd");
newAnimalAdd.addEventListener("click",function(event){
    event.preventDefault();
    const animal=newAnimalInput.value;
    let newAnimal=document.createElement("li");
    newAnimal.innerText=newAnimal;
    list.append(animal);

    list.addEventListener("click",function(e){
        if(e.target.tagName=='li'){
            console.log(e.target.innerText);
        }
    })
})


