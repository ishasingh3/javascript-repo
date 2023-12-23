let score = 33
console.log(typeof score); //this will print number

let strScore = String(score) //here we have changed the datatype 
//generally the first letter of a datatype is written in capital eg String
console.log(typeof strScore); //output = string

//console.log(35+score);

let num = "65" //value taken as a string
let stringNum = Number(num)

console.log(typeof stringNum);
console.log(45 + stringNum);

/*js is a lil faulty language, if we give value of num = "33abc" and convert it into number
 then typeof will still give number.
 Hence we should check the value while working */
let num1 = "65abs"
let stringNum1 = Number(num1)
console.log(typeof stringNum1);

let boolNum = 1
let boolBool = Boolean(boolNum)
let boolNum2 = ""
let boolBool2 = Boolean(boolNum2)
console.table([boolBool, boolBool2])
//console.log(boolBool);

/* Boolean returns: 
false = empty string
true = string has value
true = 1
false = 0 
*/


// -------OPERATIONS--------

// js offers basic arithmetic operations
console.log(90 + 80);
console.log(90 - 80);
console.log(90 * 80);
console.log(90 / 80);
console.log(90 % 80);
console.log(9 ** 2);

// two strings can be added

str1 = "Hello"
str2 = " Isha"
str3 = str1 + str2
console.log(str3);

// precedence or type conversions 

console.log("1" + 2); //it will give 12
console.log(1 + "2"); //it will give 12 as well
console.log("1" + 2 + 3); //this will give 123
console.log(1 + 2 + "3"); //this will give 33

// console.log(+true); //this will give 1
// console.log(+"");

let num0, num2, num3

num0 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion