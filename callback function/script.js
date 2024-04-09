const function1 = (function2) => {
    console.log("fetching data from server...");


    console.log("finished fetching data...");
    function2();
}

const function2 = () => {
    const innerFunction = () => {

        console.log("Code To Show UserProfile Here...")
    }
    function1(innerFunction)
};

function2();


const customers = [
    {name : "customer1", email : "customer1@gmail.com" , gender : "female", age : 20},
    {name : "customer2", email : "customer2@gmail.com" , gender : "male", age : 25},
    {name : "customer3", email : "customer3@gmail.com" , gender : "female", age : 30},
    {name : "customer4", email : "customer4@gmail.com" , gender : "male", age : 35}
]
customers.height = 114;
console.log(customers)
const isMale = (arrayElement) => {
    return arrayElement.gender === "male"; 
}
console.log(customers.filter(isMale));


// const numbers = [1,2,3,4,5,6];
// const num1 = (num) => {
//     return num >= 2
// };
// let result = numbers.filter(num1);
// console.log(result)

const num1 = [1,2,3,4,5,6,7,8,9];
console.table(num1);
const num = (number) =>{
    return number >= 2;
}
console.log(num1.filter(num))