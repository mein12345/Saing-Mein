// Case sensitive ဖြစ်
let textString = "Welcome To Myanmar";
console.log(textString.toUpperCase()); // this change the string into uppercase
textString.toLowerCase();//this change the string into lower case
console.log(textString.toLowerCase());

textString.length // ဒါကစာလုံးအရေအတွက်ကိုတွက်ပေး
console.log(textString.length);

textString.indexOf("M")//ဒါကစာလုံးတစ်လုံးရဲ့တည်နေရာကိုနံပါတ်နဲ့ပြပေး။ ပထမဆုံးလာတဲ့စာလုံးကိုပြပေး
console.log(textString.indexOf("m"));

let result = textString.toUpperCase();
console.log(result);
let result1 = textString.toLowerCase();
console.log(result1);
let result2 = textString.length;
console.log(result2);

// Number 
let num = "50";
// sting ကနေ number ပြောင်း
parseInt(num,10);
console.log(parseInt(num,10));

// number ကနေ string ပြောင်း
let num1 = 14;
num1.toString();
console.log(num1.toString())

// Objects
const customer = {name : "customer1", email : "customer1@gmail.com", gender : "female"};
Object.keys(customer)// key တွေဘဲလိုချင်ရင်သုံးလို့ရ
Object.values(customer)// value တွေလိုချင်ရင်သုံးလို့ရ
console.log(Object.keys(customer));
console.log(Object.values(customer));

// hasOwnProperty က object ထဲမှာ ကိုယ်သိချင်တာရှိမရှိစစ်လို့ရ
customer.hasOwnProperty("age");
console.log(customer.hasOwnProperty("name"));

// Array
const cities = ["Yangon", "Mandalay", "Myitkyina"];

cities.length 
cities[cities.length-1]//last element ကိုရှာနည်း
cities.push("Beijing");//add the element to the last in array
console.log(cities.push("Beijing"));

let result3 = cities.pop();
console.log(result3);
console.log(cities)
console.log(cities.join(" "))

// let number = [1,2,3,4,5];
// console.log(number);
// let n = number.pop();
// console.log(n);
// console.log(number);
// number.slice(0,2);
// console.log(number.slice(0,3));
// console.log(number)