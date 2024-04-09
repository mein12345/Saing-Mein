
// let click = 0;
// const onClickFunction = () => {
//     click += 1;
//     console.log("You are already clicked me",click);
//     if(click === 10){
//         click = 0;
//     };
    
// };
// const bodyElement = document.getElementsByTagName("body")[0];
// const testTextContent = document.getElementsByClassName("hello");
// const createNewTag = document.createElement("h3");
// createNewTag.classList.add("header")
// const textNodeForH3 = document.createTextNode("HELLO MYANMAR");
// createNewTag.appendChild(textNodeForH3);
// bodyElement.append(createNewTag);
// // const text = testTextContent.textContent;
// // console.log(text);
// // testTextContent.textContent = "Hello Myanmar";
// // const myanmar = testTextContent.textContent;
// // console.log(myanmar)

// // console.log(testTextContent.innerText);
// testTextContent.textContent = "HELLO MYANMAR";
// const textChange = testTextContent.textContent ;
// console.log(textChange);

// createNewTag.textContent = "hello Yangon";
// const Elementtest = document.getElementsByClassName("scenery")[0];
// Elementtest.addEventListener("click", onClickFunction);

const tryNew = document.getElementsByClassName("changePhoto")[0];
const myButton = document.getElementsByClassName("scenery")[0];
const OriginalImages = tryNew.src;
const imageArray = [
    "https://images.unsplash.com/photo-1710438641275-1b1512304344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1708649290066-5f617003b93f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1710269388985-3cca94411981?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
];
let counter = 0;
const myFunction = () => {
     if (counter === 3){
        tryNew.src=OriginalImages;
        return counter = 0;
    }
    tryNew.src=imageArray[counter];
    counter += 1 ;
    console.log("WOW you made it",counter);
   
};
myButton.onclick = myFunction