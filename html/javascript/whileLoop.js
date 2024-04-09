// const customers = [
//   {name : "customer1", email: "customer1@gmail.com",gender : "female"},
//   {name : "customer2", email: "customer2@gmail.com",gender : "male"},
//   {name : "customer3", email: "customer3@gmail.com",gender : "female"},
//   {name : "customer4", email: "customer4@gmail.com",gender : "male"},
// ]
// console.log(customers)
// for ( let i=0 ; i<customers.length; i++){
//   console.log(i)
//   let currentCustomer = customers[i];
//   if (currentCustomer.gender === "female"){
//     continue;
//   }
//   console.log("sending email to :", customers[i].email);

// }

// for (let i=0; i<customers.length; i++){
//   let currentCustomer = customers[i];
//   console.log("sending email to :", currentCustomer.email)
//   if (i==2 ){
//     break;
//   }
// }

// for (let i of customers) {
//   console.log(i.gender)
// }

// for (let i in customers) {
//   console.log(i)
// }



const customers = [
  {name : "customer1", email : "customer1@gmail.com", gender : "female"},
  {name : "customer2", email : "customer2@gmail.com", gender : "male"},
  {name : "customer3", email : "customer3@gmail.com", gender : "female"},
  {name : "customer4", email : "customer4@gmail.com", gender : "male"},
]
const isMale = (arrayElement) => {
  return arrayElement.gender === "male";
}
console.log(customers.filter(isMale))

console.log(customers.length,customers)
for (let i = 0; i < customers.length ; i++){
  console.log(i)
}

for (let i in customers){
  console.log(customers[i].email)
}

for ( let i of customers){
  console.log(i)
}

let num = 1 ;
while (num <= 10){
  console.log(num);
  num++;
}

let prev = 0, next = 1;
while (next <= 100) {
    console.log(next);
    let temp = next;
    next = prev + next;
    prev = temp;
}
let originalString = "hello";
let reversedString = "";
let i = originalString.length - 1;
while (i >= 0) {
    reversedString += originalString[i];
    i--;
}
console.log(reversedString);


function area(width,height){
  return width*height;
};
console.log(area(2,4));

let Hello = "Hello";
let reverse = "";
let y = Hello.length-1;
console.log(y)
while ( y >= 0){
  reverse += Hello[y];
  y--;
}
console.log(reverse);

// let userInput;
// while (true) {
//     userInput = prompt("Enter a number:");
//     if (!isNaN(userInput)) {
//         console.log("Valid number entered:", userInput);
//         break;
//     } else {
//         console.log("Invalid input. Please enter a number.");
//     }
// };

const num1 = [1,2];
const num2 = [[1,2],[3,4],[5,6]];
console.log(num2);
for ( let i=0; i<num2.length; i++){
  console.log(num2[i]);
  let num = num2[i];
  for (let y=0; y < num.length; y++){
    let current = num[y];
    console.log(current)
  }
};
let dimensionalArray = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(dimensionalArray[0][2]);  

const cities = ["Mandalay","Yangon","NayPyiTaw"];
let [cityOne,cityTwo,cityThree] = cities;
console.log(cityOne,cityTwo,cityThree);
console.log(cities.join('-'));
const copyCity = [...cities];
console.log(copyCity);
const city = [].concat(cities);
console.log(city);

const calculate = (...params)=>{
  console.log(params);
  let total = 0;
  for (let i = 0; i < params.length; i++){
    console.log(params[i])
    total += params[i];
  }
  return total
};
let result = calculate(1,2,3);
console.log(result);

let string = "hello";
let mix = string.length-1;
console.log(mix)
for ( let i = 5; i< mix; i--){
  console.log()
};

const fetchData = (A) => {
  console.log("Fetching data from server...");
  A();
}
const outerFunction = ()=>{
  const showUserProfile = () =>{
    console.log("Code to show user profile here")
  }
 fetchData(showUserProfile);
}
outerFunction();