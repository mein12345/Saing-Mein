// // // // const cities = ["Yangon", "Mandalay", "Naypitaw", "Hsipaw", "Lashio"];
// // // // for (let i = 0; i<= 4; i++){
// // // //     console.log(cities[i], i)
// // // // }

// // // // const customers = [
// // // //     {name : "customer1", phoneNumber : "123456", email : "customer1@gmail.com", dateOfBirth : "01.01.2000"},
// // // //     {name : "customer2", phoneNumber : "789011", email : "customer2@gmail.com", dateOfBirth : "01.01.1990"},
// // // //     {name : "customer3", phoneNumber : "234567", email : "customer3@gmail.com", dateOfBirth : "01.01.1985"},
// // // //     {name : "customer4", phoneNumber : "789012", email : "customer4@gmail.com", dateOfBirth : "01.01.1995"},
// // // // ];
// // // // console.log(customers[0].dateOfBirth);
// // // // console.log(customers[1].email,customers[1].name);
// // // // console.log(customers.length);
// // // // console.log(customers.push("what is he doing"));
// // // // console.log(customers)
// // // // console.log(customers.unshift("what is the plan for tonight"));
// // // // console.log(customers);
// // // // console.log(customers.length);

// // // // const objectsToFind =  {name : "customer1", phoneNumber : "123456", email : "customer1@gmail.com", dateOfBirth : "01.01.2000"} ;

// // // // const indexOfObject = customers.findIndex(obj =>{
// // // //     return obj.name === objectsToFind.name && obj.phoneNumber === objectsToFind.phoneNumber && obj.email === objectsToFind.email && obj.dateOfBirth === objectsToFind.dateOfBirth
// // // // })
// // // // console.log(indexOfObject)
// // // // // Sample array of objects
// // // // const arrayOfObjects = [
// // // //     { id: 1, name: 'John' },
// // // //     { id: 2, name: 'Jane' },
// // // //     { id: 3, name: 'Alice' },
// // // //     { id: 4, name: 'Bob' }
// // // // ];

// // // // // Object to search for (without knowing its key or name)
// // // // const objectToFind = { id: 1, name: 'John' };

// // // // // Custom comparison function to find the index of the object
// // // // const indexOfObject = arrayOfObjects.findIndex(obj => {
// // // //     // Compare each object in the array with the object to find
// // // //     // You can use any condition that determines whether two objects are equal
// // // //     return obj.id === objectToFind.id && obj.name === objectToFind.name;
// // // // });

// // // // console.log(indexOfObject); // Output: 2 (index of the object in the array)


// // // // for loop in
// // // const customers = {name : "customer1", phoneNumber : "123456" , email : "customer1@gmail.com"};
// // // // console.log(customers.hobby="football");
// // // // console.log(customers);
// // // // console.log(customers["name"])
// // // for (let propertyName in customers) {
// // //     // console.log(customers[propertyName],propertyName);
// // //     // console.log(propertyName,customers[propertyName]);
// // //     console.log(propertyName,customers[propertyName],propertyName.length)
// // //     // console.log(propertyName.length)
// // //     // console.log(customers[propertyName].length)
// // //     // console.log(customers.push(interest="gaming"))
// // // }

// // // // let validNumber = true;
// // // // while (validNumber) {
// // // //     let promptValue = prompt("Please enter a number between 1 and 100");
// // // //     const parsedValue = parseInt(promptValue, 10);
// // // //     if (parsedValue > 1 && parsedValue <100){
// // // //         console.log("Entered Value:", parsedValue);
// // // //         validNumber = false;
// // // //     }
// // // // }
// // // // prompt("what is the plan for tonight");
// // // // let perseValue = parseInt(prompt)
// // // // // console.log(customers);

// // // let num1 = 2;
// // // function test(num1,num2){
// // //     answer = num1 + num2;
// // //     return answer;
// // // }
// // // console.log(test(num1,4))

// // const number = [1,2,3,4,5,6,7,8] ;
// // console.log(number.length)
// // for (let i = 1 ; i <=number.length ; i++){
// //     console.log(i)
// // }
// // for (let i in number){
// //     console.log(i);
// // }
// // for (let i of number) {
// //     console.log(i)
// // }
// // // prompt("what is the plan for tonight");
// // // parseInt(prompt)

// // const customers = [
// //     { name : "cutomer1", age : "20" , email : "customer1@gmail.com", phoneNumber : "0123456"},
// //     { name : "cutomer2", age : "21" , email : "customer2@gmail.com", phoneNumber : "7890112"},
// //     { name : "cutomer3", age : "22" , email : "customer3@gmail.com", phoneNumber : "3456789"},
// //     { name : "cutomer4", age : "23" , email : "customer4@gmail.com", phoneNumber : "02345879"},
// // ];
// // console.log(customers[1]);
// // console.log(customers.length);
// // console.log()
// // console.log(customers);
// // for (let i = 0; i<=customers.length ; i++){
// //     console.log(i)
// // }

// const person = {
//     name : "saingmein",
//     age : 19 ,
//     dateOfBirth : 2002,
//     height: "5'6", 
// }
// for (i in person){
//     console.log(i,person[i])
// }
// console.log(person);
// console.log(person.name);

// const array = [person];
// console.log(array);


// // error handling
// try {const number = 10 ;
// number++ ;
// console.log(number)}catch (err){
//     console.log("what")
// }

// {
//     let num1 = 10;
//     const numWithConst = 100 ;
//     var numWithVar = 1000 ;
// }

// const customers = {
//     name : "jhon", 
//     age : 20 ,
//     work : "independent",
// }
// let {name,age,work} = customers;

// console.log(name , age , work );

// const color = ["orange", "yellow", "red", "green", "blue"];
// // let firstColor = color[0];
// // let secondColor = color[1];
// // let thirdColor = color[2];
// // let forthColor = color[3];
// // let fifthColor = color[4];

// let [firstColor ,secondColor,thirdColor,forthColor,fifthColor] = color;
// console.log(firstColor);
 
// const A = [
//     { name : "customer1", email : "customer1@gmail.com" , gender : "female"},
//     { name : "customer2", email : "customer2@gmail.com" , gender : "male"},
//     { name : "customer3", email : "customer3@gmail.com" , gender : "female"},
//     { name : "customer4", email : "customer4@gmail.com" , gender : "male"},
//     { name : "customer5", email : "customer5@gmail.com" , gender : "female"},
// ];

// for (let i=0; i<A.length ; i++){
//     let currentCustomers = A[i];
//     if ( currentCustomers.gender === "male"){
//         continue;
//     }
//     console.log("sending email to:" , currentCustomers.email);
//     i++
// }

// function text(num1,num2){
//     num3 = num2*num1
//     return num3;
// }
// console.log(text(2,6));

// let personName = (first,last) =>{
//     return first + " " + last;

// }
// console.log(personName("Saing", "Mein"))

let num1 = [1,2,3];
let num2 = [[1,2],[3,4],[5,6]];
console.log(num2.length)

// for (let i=0 ; i < num1.length ; i++){
//     console.log(num1[i],i);
// }

// for (let i = 0 ; i < num2.length ; i++){
//     // console.log(i,num2[i]);
//     let arrayInArray = num2[i];
//     // console.log(num2[i])
//     console.log(arrayInArray[i])
//     for (let j = 0 ; j < arrayInArray.length ; i++);
//     // console.log(arrayInArray[i]);
//     let currentArray = arrayInArray[j];
//     console.log('currentElement :' ,currentArray)
// }

