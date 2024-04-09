// const myInput = document.getElementsByClassName("input1")[0];
// const orderListTag = document.getElementsByClassName("orderList")[0];
// const handleChange = (event) => {
//     const inputValue = event.target.value;
//     const listItem = document.createElement("li");
//     listItem.classList.add("list-group-item");
//     listItem.append(inputValue);
//     orderListTag.append(listItem);
//     myInput.value = "";
// }

// myInput.addEventListener("change", handleChange)

const myInput = document.getElementsByClassName("input1")[0];
const shoppingList = document.getElementsByClassName("shoppinglistcontainer")[0];

let productId = 1;
const handle = (event) => {
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const spanTag = document.createElement("span");
    spanTag.classList.add("spanTag");
    const iconContainer = document.createElement("div");
    iconContainer.classList.add("iconContianer")
    const icon = document.createElement("i");
    icon.classList.add("far", "fa-trash-alt");
    const products = document.createElement("div");
    products.classList.add("products");
    products.append(spanTag)
    iconContainer.append(icon)
    shoppingList.append(productContainer);
    productContainer.append(products,iconContainer);
    const product = `${productId} . ${inputValue}`
    spanTag.append(product);
    productId += 1;
    spanTag.addEventListener("click", () => {
        console.log("Hello");
        const classExist = spanTag.classList.contains("purchased");
        if(classExist === true){
            spanTag.classList.remove("purchased")
        }else{
            spanTag.classList.add("purchased")
        }
    });
    iconContainer.addEventListener("click", () => {
        console.log("hello",productContainer.remove() );

    })
    myInput.value = "";
}

myInput.addEventListener("change",handle)