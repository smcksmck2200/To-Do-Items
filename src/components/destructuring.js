// Destructuring Objects
let person = {
    name: "Cory",
    age: 37,
    color: "green"
}

const { name } = person
// const name = person.name

console.log(name)
console.log(person)

const aBiggerPerson = {
    height: 60,
    birthday: "4/21",
    ...person
}

console.log(aBiggerPerson)

// Destructuring Array
let fruits = ["apple", "orange", "banana"]

const [ one, two ] = fruits
// const one = fruits[0]
// const two = fruits[1]

console.log(one)
console.log(two)

// Spreading an array
const allTheFruits = ["papaya", "mango", ...fruits]
console.log(allTheFruits)

console.log(fruits)