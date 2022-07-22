//Currying

function greeting(name) {
    const name = "Sherwin"
    return function greet(greeting) {
        console.log(`${greeting}${name}`)
    }
}
console.log(greeting)
//const greeting=()=>{return 1}
//let myGreet = greeting()
//console.log(myGreet)
//mygreet("Hello")
//greeeting("Devan")("Hello")