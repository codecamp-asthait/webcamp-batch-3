
const num1 = Number("10");

//Basic operators
// const sum = num1 + 5;
// console.log(sum); // 15
// const difference = num1 - 3;
// console.log(difference);

// const product = num1 * 2;
// console.log(product);

// const quotient = num1 / 2;
// console.log(quotient);

// const remainder = num1 % 3;
// console.log(remainder); // 1

// // const increment = ++num1;
// // console.log(increment); // 11

// const decrement = --num1;
// console.log(decrement); // 9

//Logical operators

const isAdult = true;
const hasID = false;

const canEnter = isAdult && hasID;
console.log(canEnter); // false
const canEnterOr = isAdult || hasID;
console.log(canEnterOr); // true

console.log(!false); // true
console.log(!!hasID); // false

//short circuiting

const defaultAge = 18;
const userAge = 0;

const isTrue =  undefined || null || 0 || "" || "Hello" || "Default";

console.log(10/0); // Infinity

//ternary operator

if(userAge >= 18){
    console.log("User is an adult.");
} else {
    console.log("User is a minor.");
}

(userAge >= 18) ? "User is an adult." : "User is a minor.";

// nullish coalescing operator

const inputAge = null;
const finalAge = inputAge ?? defaultAge;
console.log(finalAge); // 18