// Immediately Invoked Function Expressions (IIFE)

// iife: immediately invokes a function and helps to stay cleared from global scope pollution

// iife requires a semicolon to end as sometimes it might not know where the function stops

(function code(){
    // named iife
    console.log(`DB connected`);
}) ();  // this semi colon was giving an error; semicolon to end first code
// code()

// sometimes global scope pollution can cause problems
// ()()
// function ()  execution ()

// as arrow function
( () => {
    console.log(`DB connected two.`);
})();

( (name) => {
    console.log(`Welcome to the page ${name}.`);
})("Isha");

// to write two iife in a code always close first iife by semi colon