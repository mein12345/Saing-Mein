// // Document Object Model(DOM)
// console.log("hello world");
// const divElement = document.createElement("div");
// const textNode = document.createElement("WelcomeToMyanmar");
// divElement.appendChild(textNode);
// const bodyElement = document.getElementsByTagName("body");
// console.log(bodyElement);

// const customers = [
//     {name : "customer1", email : "customer1@gmail.com", gender : "female"},
//     {name : "customer2", email : "customer2@gmail.com", gender : "male"},
//     {name : "customer3", email : "customer3@gmail.com", gender : "female"},
//     {name : "customer4", email : "customer4@gmail.com", gender : "male"},
// ]

// const newCustomers = (gander)=>{
//     return gander.gender === "male"
// }
// customers.filter(newCustomers)

// console.log(customers.filter(newCustomers));

// const add = (what)=>{
//      what.booking = 'what';
//      return what
// }
// console.log(customers.map(add));

// for ( let i = 0 ; i < customers.length ; i++){
//     console.log(i)
// }
// for (let i in customers){
//     console.log(i)
// }

// for ( let i of customers) {
//     console.log(i)
// };


// const numbers = [1,2,3,4,5];
// const newNumbers = (num)=>{
//     return num/2;
// }
// console.log(numbers.map(newNumbers));


// const sentence = (sentence1) => {
//     console.log('what is the problem')
//     sentence1()
// }

// const outerFunction = () =>{
//     const sentence1 = ()=> {
//         console.log('no, that is not a problem')
//     }
//     sentence(sentence1)
// }
// outerFunction();

// let string1 = "324";
// let string2 = "3234abc";
// console.log(parseInt(string1),parseInt(string2));

// let num = 0;
// while (num <= 10){
//     console.log(num)
//     num++;
// };

// // let p = prompt("what you would like to do tonight");
// // let q = parseInt(p);
// // console.log(q)

// console.log(customers.push("what"));
// console.log(customers);
// console.log(customers.pop());
// console.log(customers.unshift("nothing"));
// console.log(customers);
// console.log(customers.shift());
// console.log(customers.slice(0,2));
// console.log(customers.splice(1,2));

// console.log(numbers.splice(1,3))

 const bodyElement = document.getElementsByTagName("body")[0];
 console.log("Body Element :", bodyElement);

 const parents = document.getElementsByClassName("parent")[0];
//  console.log("parentDiv", parent);
// parents.innerHTML = "";

 const divWithId = document.getElementById("myId");
 console.log("myId :", divWithId);

 const parentDiv = document.createElement("div");
parentDiv.classList.add("parent");
// parentDiv.classList.remove("parent")

 const childDivOne = document.createElement("div");
 childDivOne.classList.add("childOne")
 const childDivOneText = document.createTextNode("Child one");
 childDivOne.appendChild(childDivOneText);

 const childDivTwo = document.createElement("div");
 childDivTwo.classList.add("ChildTwo")
 childDivTwo.append("Child Two");

 parentDiv.append(childDivOne,childDivTwo);
 bodyElement.appendChild(parentDiv);

 const styleTestDiv = document.getElementsByClassName("styleTest")[0];
 styleTestDiv.style.height;
 console.log("styleTestDiv's width :", styleTestDiv.style.width)
 console.log("styleTestDiv's height :", styleTestDiv.style.height)
 console.log("styleTestDiv's background color :", styleTestDiv.style.backgroundColor)