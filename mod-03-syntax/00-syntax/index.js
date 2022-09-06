/*
 *
 * JAVASCRIPT TYPES
 *
 */

// 1. Number
10

// 2. Float
10.5

// 3. String
"Hello World"

// 4. Boolean
true

// 5. Array
[1, 2, 3]
["Hello", "World"]
[true, false, true]
[1, "Hello", true]

// 6. Object
const obj = {
  name: "John",
  age: 30,
  isMarried: false,
  favoriteThings: ["pizza", "football"],
  contacts: {
    email: "john@example.com",
    phone: "123-456-7890",
  }
}

// 7. BigInt
BigInt(Number.MAX_SAFE_INTEGER)

// 8. Symbol
// A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".
Symbol("foo")

// 9. Undefined
undefined

// 10. Null
null

// 11. Function - details later
function example() {
  console.log('example')
}

/*
 *
 * VARIABLES
 *
 */

// ============================== Constants ==============================

const answer = 42

answer = 43 // TypeError: Assignment to constant variable.

// ============================== Let Variables ==============================

let answerToEverything = 42

answerToEverything = 43 // No error.

// ============================== Var Variables ==============================

let answerToLife = 42
answerToLife = 43 // No error.

// ============================== Final Variables ==============================

const luckyNumbers = [7, 13, 42]
luckyNumbers.push(99) // No error.
luckyNumbers[0] = 0 // No error.

const person = {
  name: 'Michele Riva',
  age: 27,
  favoriteThings: {
    color: 'pink',
    food: 'pizza',
    language: 'JavaScript'
  }
}

person.favoriteThings.country = 'Netherlands' // No error.

// ============================== Maths ==============================

// Addition
1 + 1 // 2

// Subtraction
2 - 1 // 1

// Multiplication
2 * 2 // 4

// Division
4 / 2 // 2

// Exponentiation (ES2016)
2 ** 3 // 8

// Remainder
44 % 6 // 2

// Increment
let myVar = 0
myVar++ // 1

// Decrement
let myVar2 = 0
myVar2-- // -1

/*
 *
 * CONDITIONS
 *
 */

// ============================== If ==============================
if (true) {
  console.log('This will always run')
}

if (18 > 10) {
  console.log('18 is greater than 10')
}

const name = "Michele"
var age = 27
if (name === "Michele" && age === 27) {
  console.log('Hello Michele, you are 27 years old')
}

if (name === "Michele" || age == "27") {
  console.log('Hello Michele, you are 27 years old')
}


// ============================== If/Else ==============================

if (false) {
  console.log('This will never run')
} else {
  console.log('This will always run')
}

// ============================== If/Else If/Else ==============================
var age = 18

if (age < 13) {
  console.log('You are a child')
} else if (age >= 13 && age < 20) {
  console.log('You are a teenager')
} else if (age >= 20 && age < 30) {
  console.log('You are a young adult')
} else {
  console.log('You are an adult')
}

// ============================== Ternary Operator ==============================

var age = 18
const canDrive = age >= 18 ? 'yes' : 'no'

console.log(canDrive) // 'yes'

// ============================== Switch ==============================

var age = 18

switch (age) {
  case 13:
    console.log('You are a teenager')
    break
  case 18:
    console.log('You are an adult')
    break
  default:
    console.log('You are not a teenager or an adult')
}


/*
 *
 * LOOPS
 *
 */

// ============================== For Loops ==============================

// Classic for
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// For of
const numbers = [1, 2, 3, 4, 5]

for (const number of numbers) {
  console.log(number)
}

// For in
const person = {
  name: 'Michele Riva',
  age: 27,
  favoriteThings: {
    color: 'pink',
    food: 'pizza',
    language: 'JavaScript'
  },
  log() {
    console.log(this)
  }
}

for (const key in person) {
  console.log(key)
  console.log(person[key])
}

// ============================== While Loops ==============================

let i = 10
while (i > 0) {
  console.log(i)
  i--
}

// ============================== Do While Loops ==============================
let j = 0
do {
  console.log(i)
  j++
} while (j < 10)

// ============================== Break ==============================
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i)
}

// ============================== Continue ==============================
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue
  }
  console.log(i)
}

// ============================== For Each ==============================
var ns = [1, 2, 3, 4, 5]
ns.forEach(function(number) {
  console.log(number)
})

// ============================== Map ==============================
var ns = [1, 2, 3, 4, 5]
var ns2 = ns.map(function(number) {
  return number * 2
})

console.log(ns2) // [2, 4, 6, 8, 10]

// ============================== Filter ==============================
var ns = [1, 2, 3, 4, 5]
var ns2 = ns.filter(function(number) {
  return number > 3
})

console.log(ns2) // [4, 5]

// ============================== Reduce ==============================
var ns = [1, 2, 3, 4, 5]
var sum = ns.reduce(function(acc, number) {
  return acc + number
}, 0)

console.log(sum) // 15

// ============================== Find ==============================
var ns = [1, 2, 3, 4, 5]
var found = ns.find(function(number) {
  return number > 3
})

console.log(found) // 4

// ============================== Find Index ==============================
var ns = [1, 2, 3, 4, 5]
var foundIndex = ns.findIndex(function(number) {
  return number > 3
})

console.log(foundIndex) // 3

// ============================== Every ==============================
var ns = [1, 2, 3, 4, 5]
var allBiggerThanZero = ns.every(function(number) {
  return number > 0
})

console.log(allBiggerThanZero) // true

// ============================== Some ==============================
var ns = [1, 2, 3, 4, 5]
var someBiggerThanZero = ns.some(function(number) {
  return number > 0
})

console.log(someBiggerThanZero) // true

// ============================== Includes ==============================
var ns = [1, 2, 3, 4, 5]
var includesTwo = ns.includes(2)

console.log(includesTwo) // true

// ============================== Sort ==============================
var ns = [1, 2, 3, 4, 5, 10, 12]
var ns2 = ns.sort(function(a, b) {
  return a - b
})

// show [1, 2, 3, 4, 5, 10, 12].sort()

console.log(ns2) // [1, 2, 3, 4, 5, 10, 12]

/*
 *
 * FUNCTIONS
 *
 */

// ============================== Function Declaration ==============================
function sayHello() {
  console.log('Hello')
}

sayHello()

// ============================== Function Expression ==============================
const sayHello2 = function() {
  console.log('Hello')
}

sayHello2()

// ============================== Arrow Function ==============================
const sayHello3 = () => {
  console.log('Hello')
}

sayHello3()

// ============================== Arrow Function (One Line) ==============================
const sayHello4 = () => console.log('Hello')

sayHello4()

// ============================== Arrow Function (One Line, One Parameter) ==============================
const sayHello5 = name => console.log(`Hello ${name}`)

sayHello5('Michele')

// ============================== Arrow Function (One Line, One Parameter, Implicit Return) ==============================
const sayHello6 = name => `Hello ${name}`

console.log(sayHello6('Michele'))

// ============================== Default Parameters ==============================
const sayHello7 = (name = 'Michele') => `Hello ${name}`

console.log(sayHello7()) // Hello Michele

// ============================== Rest Parameters ==============================

const sayHello8 = (name, ...otherNames) => {
  console.log(name)
  console.log(otherNames)
}

sayHello8('Michele', 'Riva', 'JavaScript', 'Developer')

// ============================== Spread Operator ==============================
const sayHello9 = (name, ...otherNames) => {
  console.log(name)
  console.log(otherNames)
}

const names = ['Michele', 'Riva', 'JavaScript', 'Developer']

sayHello9(...names)

// ============================== IIFE ==============================
(function() {
  console.log('Hello')
})();
 
// Remember, callbacks later
