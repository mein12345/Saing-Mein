// const inputTag = document.getElementsByClassName("form-control")[0];
// const orderListTag = document.getElementsByClassName("orderList")[0];
// const handleChange = (hi) => {
//     const inputValue = hi.target.value;
//     const listItem = document.createElement("li");
//     listItem.classList.add("list-group-item");
//     listItem.append(inputValue);
//     orderListTag.appendChild(listItem);
//     inputTag.value = "";
// };

// inputTag.addEventListener("change",handleChange);


const inputTag = document.getElementsByClassName("form-control")[0];
const orderList = document.getElementsByClassName("list-group")[0];
let counter = 0;
const handleChange = (hi) => {
    const inputValue = hi.target.value;
    const listGroup = document.createElement("li");
    listGroup.classList.add("list-group-item");
    orderList.appendChild(listGroup);
    listGroup.append(inputValue);
    counter += 1;
    console.log("you already clicked me", inputValue ,counter);
    inputTag.value = "";
};
inputTag.addEventListener("change", handleChange);