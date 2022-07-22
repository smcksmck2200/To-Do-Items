// Currying
function greeting(name) {
    return function greet(greeting) {
        console.log(`${greeting} ${name}`)
    }
}

const greetCory = greeting("Cory")
greetCory("Oh hi")

greeting("Devan")("Hello")