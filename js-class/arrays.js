//array literal
const fruits = [];

//array constructor
//empty array
const vegetables = new Array();

const moreFruits = new Array("Banana", "Orange", "Apple");

const countries = new Array(5);

fruits.push("Mango");
fruits.push("Pineapple");
fruits.push("Grapes");
fruits.push(1);

fruits.unshift("Strawberry");
fruits.splice(2, 0, "Watermelon" );

const pineapple = fruits.findIndex((fruit)=> fruit === "Pineapple");
console.log(pineapple); // Pineapple

console.log(fruits , "fruits"); // []

const users = [
    { name: "jaber", age: 25 , degree: "BSc" },
    { name: "rony", age: 30 , degree: "MSc" },
    { name: "rajib", age: 35 , degree: "MSc" },
    {name : "jamal", age: 40 , degree: "PhD"}
]

const user = users.find((user) => user.name === "jaber");
console.log(user.age); // { name: "jaber", age: 25 }


//Transforming arrays

// const mappedFruits = fruits.map((fruit)=> fruit.toLocaleUpperCase());
// console.log(mappedFruits); 
// console.log(fruits)// [ 'STRAWBERRY', 'MANGO', 'WATERMELON', 'PINEAPPLE', 'GRAPES' ]

// const useTransformedAges = users.map((user)=> user.age + 5);
// console.log(useTransformedAges);

// console.log(users)
// const olderUser = users.filter((user)=> user.age > 30);
// console.log(olderUser);


//reduce
// let totalAge;
// for(let i = 0; i < user.length; i++){
//     totalAge += users[i].age;
// }

// console.log(totalAge);

// console.log("reduce method" + "------------------");

//aggregation
const totalAges = users.reduce(( acc , user) => acc + user.age , "true");
console.log(totalAges);

//group by

// {
//     "BSc": [ { name: "jaber", age: 25 , degree: "BSc" } ],
//     "MSc": [ { name: "rony", age: 30 , degree: "MSc" }, { name: "rajib", age: 35 , degree: "MSc" } ],
//     "PhD": [ {name : "jamal", age: 40 , degree: "PhD"} ]
// }

// const groupedByDegree = users.reduce((group , user)=> {
//      const degree = user.degree;

//         if(group[degree]){
//             group[degree].push(user);
//         }else{
//             group[degree] = [];
//         }
//         group[degree].push(user);
//         return group;
//     }     
//     , {})

// console.log(groupedByDegree);

// //sorting

// console.log("sorting" + "------------------");

// const sortedFruits = fruits.sort();
// console.log(sortedFruits);

// const numbers = [5, 3, 8, 1, 4];

// const numbersSortedDesc = numbers.sort((a , b) => b - a);
// console.log(numbersSortedDesc);

// const sortedUserByAge = users.sort((a , b)=>  b.age - a.age ).map((user) => user.name).filter((name) => name.startsWith("r"));
// console.log(sortedUserByAge);

// console.log(null === undefined); 