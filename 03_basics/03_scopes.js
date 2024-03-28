// local and global scope
// variables that are defined inside a function or a a block of code using {} are only locally available

// var does not follow the scope logic, hence it should not be used

var c = 600

// the {} is the scope

if (true) {
    let a = 20
    const b = 40
    var c = 60
}
var c = 900 // var will give the last defined value


// console.log(a); // a is only defined for if so this will not print anything; erroe
// console.log(b); // same logic as a
console.log(c); // as c is defined using var, it will get printed

// core scope and node scope in code environment are different things

// nested scope

function one(){
    const username = "isha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true){
    const username = "isha"
    if(username === "isha"){
        const website = "instagram"
        console.log(username + website);
    }
}
// console.log(username);


// +++++++++++++++++++++++++++++++

//               method one
// in this method the function can be called before the function code and it will not give an error

addOne(5)

function addOne(value){
    return value + 1
}


//                method two
// we can NOT call the function before its definition
// in this method function is declared as well as it held in a variable
// called "hosting" in js
const addTwo = function(value){
    return num + 2
}

addTwo(5)

// both aforementioned ways are correct ways to make a function, the second funstion addTwo can also be called an expression