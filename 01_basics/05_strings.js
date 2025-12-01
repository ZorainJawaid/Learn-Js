// const name = "Zorain Jawaid"
// const age = "28"

// console.log(`Hello my name is ${name} and my age is ${age}`)


const newName = new String('ZoriJr')

// console.log(newName [0])

// console.log(newName.length)
// console.log(newName.toUpperCase())
// console.log(newName.charAt(3))
// console.log(newName.indexOf('r'))

const newString = newName.substring(0, 4)
console.log (newString)

const anotherString = newName.slice(-5, 4)
console.log(anotherString)


const newStringOne = "   Zorain"
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://developer.com/zorain%20jawaid.com"
console.log(url.replace('%20', '-'))

console.log(url.includes('zorain'))