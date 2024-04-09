const button = document.getElementsByClassName("change-button")[0];

const image = document.getElementsByClassName("photo")[0];

const originalImage = image.src;

const imageArray = [
    "https://images.unsplash.com/photo-1710415273471-24431054c4da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1710361779104-c5b91d7e2bd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1710288964230-2d7c43ee4d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
]

let counter = 0;
const myFunction = () => {
    if(counter === 4){
        image.src = originalImage;
        return counter = 0;
    }
    image.src = imageArray[counter];
    counter += 1;
    console.log("you already clicked me", counter, image.src);
};

button.addEventListener("click",myFunction);