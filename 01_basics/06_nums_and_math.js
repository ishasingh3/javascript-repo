const score = 100
console.log(score);

// js is a dynamic language so we dont have to define the datatype but if you want to you can do so
// by declaring it as an object, this will also give you prototypes related to number
const balance = new Number(15000)
console.log(balance);
console.log(balance.toString(), typeof(balance))
console.log(typeof(balance), balance.toString().length);

// if we want to show output upto a particular digit we can use toFixed()
console.log(balance.toFixed(5));

// toprecision(), if we use this then it will only give precise value upto the number we provide
balance2 = 10.9237
console.log(balance2.toPrecision(5));

// to make big numbers more readable
balance3 = 1500556600000
console.log(balance3.toLocaleString());
console.log(balance3.toLocaleString('en-US'));


/************************MATH****************************/

console.log(Math);
console.log(Math.PI); //this is a property
console.log(Math.abs(-66.2));
console.log(Math.round(66.6));
console.log(Math.ceil(66.1)); // ceil or ceiling will always choose the top value ie 67
console.log(Math.floor(66.9)); // floor will always choose the lower value ie 66
console.log(Math.min(6352,382748,2738,3328));
console.log(Math.max(6352,382748,2738,3328));
console.log(Math.pow(16, 2));
console.log(Math.sqrt(256));

// Math.random(), value will always be between 0 & 1
console.log(Math.random());
// If we want value btw 1 to 10 we will multiply by 10 and to avoid getting 0 we will add 1
console.log((Math.random()*10) + 1);
// to get a single digit
console.log(Math.floor(Math.random()*10));

// to get output between two numbers
let max = 20
let min = 10
console.log(Math.floor(Math.random()*(max - min + 1)) + min);