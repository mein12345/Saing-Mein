// DOM (document object model)
const createH1 = document.createElement("h1");
createH1.classList.add("container")
const createtextNode = document.createTextNode("Welcome To Myanmar");
createH1.appendChild(createtextNode);
const callBody = document.getElementsByTagName("body");
const Body = callBody[0];
Body.appendChild(createH1);

document