const myInput = document.getElementsByClassName("input1")[0];
const shoppingListTag = document.getElementsByClassName(
  "shoppinglistcontainer"
)[0];

let productId = 1;
// const handle = (event) => {
//     const inputValue = event.target.value;
//     const spanTag = document.createElement("span");
//     const parentDiv = document.createElement("div");
//     shoppingListTag.append(parentDiv);
//     parentDiv.append(spanTag);
//     spanTag.classList.add("spanTagList");
//     parentDiv.classList.add("productName");
//     spanTag.id = productId;
//     // const product = productId.toString() + ". " + inputValue;
//     const product = `${productId} . ${inputValue}`
//     spanTag.append(product);
//     myInput.value = "";
//     console.log(inputValue);
//     productId += 1;
// };
// const anotherDiv = document.createElement("div");
// anotherDiv.classList.add("div2");
// const classContains = anotherDiv.classList.contains("div2");
// console.log(anotherDiv);

const handle = (event) => {
  const inputValue = event.target.value;
  const parentDiv = document.createElement("div");
  const trashIcon = document.createElement("i");
  const productContainer = document.createElement("div");
  productContainer.classList.add("productContainer");
  trashIcon.classList.add("far", "fa-trash-alt");
  parentDiv.classList.add("productName");
  parentDiv.addEventListener("click", () => {
    const classExist = parentDiv.classList.contains("purchased");
    if (classExist) {
      parentDiv.classList.remove("purchased");
    } else {
      parentDiv.classList.add("purchased");
    }
  });
  const spanTag = document.createElement("span");
  spanTag.id = productId;
  trashIcon.addEventListener("click", (event) => {
    console.log("clicked", productContainer.remove());
  });
  const product = `${productId.toString()} . ${inputValue}`;
  spanTag.append(product);
  parentDiv.append(spanTag);
  productContainer.append(parentDiv, trashIcon);
  shoppingListTag.append(productContainer);
  myInput.value = "";
  productId += 1;
};

myInput.addEventListener("change", handle);
