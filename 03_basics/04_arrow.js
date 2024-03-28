const user = {
    username: "isha",
    price: 999,

    welcomeMessage: function(){
        // we can not directly use ${username}
        // current context
        console.log(`${this.username}, welcome to website`);
        console.log(this); // gives all the current value
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);
// console.log(globalThis);

// in browsers the most global object is WINDOWS

const  coder = function(){
    let username = "isha"
    console.log(this);
    // 'this' only works in object context, it does not work for a function
    console.log(this.username); // this will give undefined
}

// coder()

// arrow function
// () => {}
const coder2 = () => {
    let username = "isha"
    console.log(this);
}

// coder2()

// arrow function and both normal function give undefined for this

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(10,20));

// implicit return: we dont need to use {} and return keyword
const addNum = (num1, num2) => num1 + num2
// we can use (paranthesis) to close it normally but if we use {} we will have to use return keyword
const addNum2 = (num1, num2) => (num1 + num2)

console.log(addNum(10,20));

// if we want to return an object in the implicit return way:

const giveName = (a, b) => ({name: "isha"}) // so () are important to use here
// const giveName = (a, b) => {name: "isha"} // this will return undefined
console.log(giveName(1,1));

const myArray = [10, 20, 30]

myArray.forEach(() => {})