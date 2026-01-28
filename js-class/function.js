//Strict mode
'use strict';

// function Greet(){
//     console.log("Hello World");
// }

// Greet();

// const GreetVar = function GreetUser(name = "Guest"){
//     return `Hello, ${name}`;
// }

// console.log(GreetVar());

//Function scope

// let globalVar = "I am global";

// function checkScope(){
//     let localVar = "I am local";
//     console.log(globalVar); // I am global
//     console.log(localVar); // I am local
//     function innerFunction(){
//         let innerVar = "I am inner";
//         console.log(localVar);
//         console.log(globalVar);
//     }
//     innerFunction();
//     console.log(innerVar); // Error: innerVar is not defined
// }

// checkScope();d

//variable shadowing 

// const value = "Global Value";

// function shadowFunction(){
//     let value = "Local Value";
//     console.log(value); // Local Value
// }

//Return statement

// function addNumbers(a, b){
//     // return a + b;
//     const sum = a + b;
//     return sum;
// }

// const result = addNumbers(5, 10); 
// console.log(result); 

// const checkAge = function (age){
//     if(age >= 18){
//         return "Adult";
//     }
//     return "Minor";
// }

// //early return

// function checkIsNumber(value){

//     if(value){
//         value.toUpperCase();
//     }
//     else{
//         console.log("Invalid input");
//     }
// }

// checkIsNumber(null)

//return object ans array


// function createUser(name, age){
//     return {
//         name: name,
//         age: age
//     };
// }
// function createNumbersArray(){
//     return [1, 2, 3, 4, 5];
// }

//function first-class citizens

//assign function to variable
// const greet = function(name){
//     return `Hello, ${name}`;
// }

// console.log(greet("Alice"));

//pass function as argument
//return function from another function
// function createAdditionFunction(fn){
//     return fn
// }

// function add(a, b){
//     return a + b;
// }


// const sum = createAdditionFunction(add);

//first order funcions

//fn nibeo na return o korbe na
// function square(num){
//     return num * num;
// }

// high order functions

//pure functions

// function multiply(a, b){
//     return a * b;
// }
// name = "ra"
// function call(){
//     return `call, ${name}`;
// }

//impure functions

// let counter = 5;

// function incrementCounter(){
//     counter++;
// }

// incrementCounter();


//callback functions

// function consoleLogCallback(data){
//     console.log(data ,"This is a callback function");
// }

// function A(a , b , callback){
//     const result = a + b;
//     callback(result);
//     return result
// }

// setTimeout(()=>{
//     console.log("This is a delayed message");
// }, 2000)

// A( "1" , "2" , consoleLogCallback)



// function fetchData(callback){
//     const data = {id: 1, name: "Sample Data"};
//     callback();
//     return data;
// }

// fetchData(consoleLogCallback)
// // let counter = 0;

// function calculateDiscount(price, discountPercent) {
//   return price * (discountPercent / 100);
// }

// function getCounterValue() {
//   return counter + 10; 
// }

// function addElementToArray(arr, element) {
//   arr.push(element); 
//   return arr;
// }

//Currying functions

function codeCampInfoCollection(contactInfo, address , payment){
    return {
        "contact-Info": contactInfo,
        "address": address,
        "payment": payment
    }
}

const userInfo = codeCampInfoCollection("017xxxxxxxx", "Dhaka, Bangladesh", "Bkash");
console.log(userInfo);

function curriedCodeCampInfoCollection(contactInfo){
    return function(address){
        return function(payment){
            return {
                "contact-Info": contactInfo,
                "address": address,
                "payment": payment
            }
        }
    }
}

const curriedContactInfo = curriedCodeCampInfoCollection("017xxxxxxxx");
const curriedAddress = curriedContactInfo("Dhaka, Bangladesh");
const curriedPayment = curriedAddress("Bkash");

console.log(curriedAddress);

// f(a , b , c) f(a)(b)(c)

//forEach, for of , for in , break , continue

const users = [
    { name: "jaber", age: 25 , degree: "BSc" },
    { name: "rony", age: 30 , degree: "MSc" },
    { name: "rajib", age: 35 , degree: "MSc" },
    { name: "jamal", age: 40 , degree: "PhD" }
];

users.forEach((user , index) => {
    console.log(index);
    console.log(users[index]);
})

for(const user of users){
    console.log(user);
}

for(const index in users){
    console.log(index);
    console.log(users[index]);
}

//closures

function outerFunction(outerVariable){
    let value = "a"
    return function innerFunction(innerVariable){
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
        console.log("Value: " + value);
    }
}

const innerNewFunction = outerFunction("outside");
innerNewFunction("inside");

const addition = (a , b) => {
    return a + b;
}

function operate(a , b , operation){
    return operation(a , b);
}

//Global context e + regular funcion k call korbo
function sayHello (){
    console.log(this);
}

//within an object

const teacher = {
    name: "Mr. Smith",
    subject: "Mathematics",
    teach: function(){
        console.log(this);
        return function inner(){
            console.log(this);
        }
        
    }
}

teacher.teach()();










