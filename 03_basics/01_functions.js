
function sayMyName () {
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}

sayMyName   // this is only a reference
sayMyName() // () means execution

function addTwoNumbers(num1, num2) {  // parameters: in function definition
    console.log(num1 + num2);
}

function addTwoNumbers2(num1, num2) {  // parameters: in function definition
    let result = num1 + num2
    return result
    console.log("isha"); //this will never get printed as function does not recognize code after return statement
    // return num1 + num2
}

addTwoNumbers(17, "12") // arguements: values when function is called
addTwoNumbers(17, "a")
const result = addTwoNumbers2(17, 10)

console.log("Result: ", result);

function loginUserMessage(username){ // username = "pro" we can give default value which will be overwritten if something is given
    if(username === undefined){ // (!usernmae)
        console.log("Please enter a username");
        return // as we have written a return here the code will not read further lines
    }
    return `${username} just logged in`
}

loginUserMessage("isha") // this will not print any value as funtion only returns a value
console.log(loginUserMessage("isha"))
console.log(loginUserMessage()) // when you dont pass anything you get undefined