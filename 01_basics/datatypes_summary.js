// Datatypes are mainly categorized into two types; primitive and non-primitive

// Primitive includes 7 datatypes: Number, String, Boolean, null, undefined, Symbol, BigInt

// number
const score = 100.3 // js doesnt have float for decimals

// string
let buddyName = "pablo"

// symbol
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2); // this will return false as symbol is unique

// bigInt: add an n in the end
const bigNumber = 873926385625923n


// non-primitive (reference): Array, Object, Function

// Making an array
const heroes = ["ironman", "batman", "superman"];

// Making a function 
const myFunction = Function()
{
    console.log("Hello World");
}

// Making an object
let myObj = {
    name: "Isha",
    age: 19,
}