// Primitive

// 7 tupes : string, Numver, Boolearn, null
// undefined, Symbol, BigInt 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)


// Reference( non primitive)

// Array, Objects, 

const heros = ["sktiman","naagra","dogdas"]
let myObj ={
    name : "Ajay",
    age : 22
}

const myfunction =function (){
    console.log("hello ji")
}

// discusion on memory

// stack (primitive), heap (non-premitive)


let myYoutubeName ="Rihana Jawil"
let anotherName  = myYoutubeName;

anotherName = "Ajay ki bakchhodi"

console.log(anotherName);
console.log(myYoutubeName)

let userOne ={
    name : 'rahulKUmr',
    id : "3r3k"

}
let userTwo= userOne;

// let userTwo ={
//     name : 'raalKUmr',
//     id : "899k"

// }
userTwo.id= 988043

console.log(userOne.id)
console.log(userTwo.id)

