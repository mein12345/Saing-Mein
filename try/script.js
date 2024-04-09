// // const myButton = document.getElementsByClassName('BUTTON')[0];
// // const image = document.getElementsByClassName("photo")[0];
// // const originalImage = image.src;
// // const imageArray = [
//     "https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1712173486904-5f149ee40dce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1685082778205-8665f65e8c2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1711735346434-ea3c23121b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
// // ]
// // let count = 0;
// // // const myclick = () => {
// // //     count += 1;
// // //     console.log('what is your plan for tonight', count)
// // // }
// // const myclick1 = () => {
// //     // myButton.style.backgroundColor = "yellow";
// //     // myButton.style.color = "black";
// //     // myButton.style.fontWeight = "bold";
// //     // myButton.style.fontSize = "20px";
// //     // myButton.style.fontFamily = "outfit";
// //     if( count === 4 ){
// //         image.src = originalImage;
// //         count = 0;
// //         return ;
// //     }
// //     const imageLink = imageArray[count];
// //     image.src = imageLink;
// //     count += 1;
// //     console.log("counter value is : ", count)
// //     // myButton.style.color = "yellow";
// //     // myButton.style.backgroundColor = " green"
// // }
// // // myButton.onclick = myclick;
// // // myButton.onclick = myclick1;
// // // myButton.addEventListener("click",myclick);
// // myButton.addEventListener('click',myclick1);


// const myButton = document.getElementsByClassName("BUTTON")[0];
// const image = document.getElementsByClassName("photo")[0];
// const originalImage = image.src;
// const imageArray = [
//     "https://images.unsplash.com/photo-1712079679970-bb45e9ef5b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1712173486904-5f149ee40dce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1685082778205-8665f65e8c2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1711735346434-ea3c23121b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
// ];
// let count = 0;
// const myFunction = () => {
//     if(count === 4){
//         image.src = originalImage;
//         count = 0;
//         return ;
//     }
//     const imageLink = imageArray[count];
//     image.src = imageLink;
//     count += 1;
//     console.log("you clicked :", count)
// }

// myButton.addEventListener('click',myFunction);
const myBody = document.getElementsByTagName("body")[0];
const myButton = document.getElementById("BUTTON");
const image = document.getElementsByClassName("photo")[0];
const originalImage = image.src;

const imageArray = [
    "https://images.unsplash.com/photo-1530981711668-84c7d5aee08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fDE5MjAlMjB4JTIwMTA4MHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1628521495179-ca4448a584d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDE5MjAlMjB4JTIwMTA4MHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1628341087835-2289cc0052f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDE5MjAlMjB4JTIwMTA4MHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTkyMCUyMHglMjAxMDgwfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1606228281437-dc226988dc3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMCUyMHglMjAxMDgwfGVufDB8fDB8fHww",

]

let counter = 0;
const myFunction = () => {
    if(counter === 5){
        image.src = originalImage;
        myBody.style.backgroundColor = "yellow"
        counter = 0;
        return;
    }
    myBody.style.backgroundColor = "gray";
    const imageLink = imageArray[counter];
    image.src = imageLink;
    counter += 1;
    console.log("clicked", counter)
}

myButton.addEventListener('click', myFunction );