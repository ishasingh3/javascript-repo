// Primitive data type is stored in Stack
// Non-Primitive data type is stored in heap

// In stack, a copy of the data is given so if we change the value of the new data, the old data will remain same
let numberOne = 456
let numberTwo = numberOne
numberTwo = 999
console.log(numberOne);
console.log(numberTwo);

// In heap the address of the data is given so the value changes no matter where you change it
let userOne = {
    name: "isha",
    email: "isha@gmail.com"
}

let userTwo = userOne

userTwo.email = "notisha@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

