// // const num = [[1,2],[3,4],[5,6]];
// // // for (let i = 0; i < num.length; i++){
// // //     // console.log(num[i],i)
// // //     let currentArray = num[i];
// // //     for ( let j=0 ; j< currentArray.length; j++);
// // //     let newArray = currentArray[j];
// // //     console.log(newArray)
// // // }

// // for (let i=0 ; i < num.length ; i++){
// //     let currentElement = num[i];
// //     for(let j=0 ; j< currentElement.length ; j++){
// //         let currentArray = currentElement[j];
// //         console.log(currentArray)
// //     }
// // }

// // const num1 = [ [1,2], [3,4,5], [6,7,8,9]];
// // for ( let i = 0; i < num1.length ; i++){
// //     // console.log(num1[i]);
// //     let currentElement = num1[i];
// //     // console.log("currentElement:", currentElement.length)
// //     for( let i = 0; i < currentElement.length; i++){
// //         let currentArray = currentElement[i];
// //         // console.log("currentArray: " , currentArray);
// //         console.log(currentArray)
// //     }
// // }
// // for ( let i=0 ; i < 100 ; i++){
// //     console.log(i);
// // }

// const customers = { name : 'customer1', email : 'customer1@gmail.com', gender : 'female'};
// // const name = customers.name;
// // const email = customers.email;
// // const gender = customers.gender;
// const {name,email,gender} = customers;
// console.log(gender);
// const cities = ["Yangon", "Mandalay", "NayPyiTaw"];
// const [cityOne,cityTwo,cityThree] = cities;
// console.log(cityOne);

// const [city1,  , city3] = cities;
// console.log(cities);
// console.log(city3);
// const copyCustomer = Object.assign({},customers);
// console.log(copyCustomer);

// const copyCustomer1 = {...customers};
// console.log(copyCustomer1)

// const copyCity = [].concat(cities);
// console.log(copyCity);
// const copyNewCity = ["Yangon",...cities,copyCustomer];
// console.log(copyNewCity);
// /* rest parameter*/
// const calculate = (...params) => {
//     let total = 0;
//     for (let i = 0; i<params.length; i++ ){
//         console.log(params[i])
//         total += params[i]
//     }
//     return total;
// }
// console.log(calculate(1,2,5))

// // callback function
// const fetchData = (callback) => {
//     console.log("fetching data from server...");
//     // asynchronous code
//     // asynchronous code
//     // asynchronous code
//     console.log("Finished fetching data...");
//     callback();
// }
// const outerFunction = () => {
//     const showUserProfile =() => {
//         console.log("Code to show user profile here...");

//     }
//     fetchData(showUserProfile)
// };
// console.log(outerFunction())

const customers = {name : 'customer1', email : "customer1@gmail.com", phoneNumber : 12345}
const {name, email, phoneNumber} = customers;
console.log(customers,name,email,phoneNumber);
const copyCustomer = Object.assign({},customers);
console.log(copyCustomer);
const copyCustomer1 = {...customers};
console.log(copyCustomer1);

const cities = ["Yangon", "Mandalay", "Hsipaw"];
const [cityOne,cityTwo,cityThree] = cities;
console.log(cities,cityOne,cityTwo,cityThree);
const copyCities = [].concat(cities);
console.log(copyCities);
const copyCity = [...cities];
console.log(copyCity);

// rest parameter


// while loop
// syntax => while (condition){
// 
// }
// let validNumber = true;
// while (validNumber) {
//     let promptValue = prompt("Please enter a number between 1 and 100");
//     const parseValue = parseInt(promptValue, 10);
//     if (parseValue > 1 && parseValue < 100){
//         console.log("Entered value :", parseValue);
//         validNumber = false ;
//     }
// }

// // prompt is mostly the same with alert.
// console.log(alert(what))

const fetchData = ()=>{
    
}