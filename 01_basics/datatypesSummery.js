// -- Primitive --
// 7 types: String, number, boolean, null, undefined, symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123');

// console.log(id === anotherId)

const bigNum = 112233123132131n


// Refrence (Non-Primitive)
// Array, Objects, Functions // DataType  


const hashiras = ["Giyu","Sanemi","Zinetsu"]; // Array

let Obj = { name: 'Zorain', age: 20, profession: "dev"} //Objects

const myFunction = function(){ console.log("Hello World") } // Function as an Variable 
// DataType of Function is Called "Object Function"
 
// typeof -- use to check datatype of variable 

console.log(typeof hashiras)