// -- Primitive --
// 7 types: String, number, boolean, null, undefined, symbol, BigInt


//const id = Symbol('123')
//const anotherId = Symbol('123');

// console.log(id === anotherId)

//const bigNum = 112233123132131n


// Refrence (Non-Primitive)
// Array, Objects, Functions // DataType  


// const hashiras = ["Giyu","Sanemi","Zinetsu"]; // Array

//let Obj = { name: 'Zorain', age: 20, profession: "dev"} //Objects

//const myFunction = function(){ console.log("Hello World") } // Function as an Variable 
// DataType of Function is Called "Object Function"
 
// typeof -- use to check datatype of variable 

//console.log(typeof hashiras)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (Non-Primitive)


// let myName = "ZorainJawaid"
// let nickName = myName
// nickName = "Zori"

// console.log(nickName)
// console.log(myName)


let userOne = {
    name: "Zorain",
    email: "zee@test.com"
}

let userTwo = userOne

userTwo.email = "zorain@test.com"

console.log (userTwo.email)
console.log (userOne.email)