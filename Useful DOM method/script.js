const bodyElement = document.getElementsByTagName("body")[0];
console.log("Body Element :", bodyElement);

const CallParent = document.getElementsByClassName("parent")[0];
console.log("div with class :", CallParent);
CallParent.classList.add("parent1")
// CallParent.innerHTML =""

const divWithId = document.getElementById("myid");
console.log("div with Id :",divWithId);

const createElement = document.createElement("div");

const creatChildElement = document.createElement("div");
creatChildElement.append("Child Three")
// const createTextNodeforthree = document.createTextNode("Child Three");
// creatChildElement.appendChild(createTextNodeforthree);

const createSecondChildElement = document.createElement("div");
const createtextNodeForFourth = document.createTextNode("childFourth");
createSecondChildElement.appendChild(createtextNodeForFourth);

createElement.append(creatChildElement,createSecondChildElement)
bodyElement.appendChild(createElement);


const newDiv = document.getElementsByClassName("text")[1];
console.log(window.getComputedStyle(newDiv).backgroundColor,window.getComputedStyle(newDiv).height);

const h1Element = document.getElementsByTagName("h1")[0];
h1Element.classList.add("header1");
