// We can declare string with either double "" or single '' quotes
const name = "isha"
const age = 19

console.log(name + age);

// if we want to concatenate and print string we will use `` (backtick)
// to use predefined data we will use ${}
// this is the modern way of writing
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

/* we can declare string as an object
and that method offers us a lot of prototypes. */
const newString = new String("nebula") //run it in the inspect console
//  string is declared as an object, each letter has a key value eg. 0:"n", 1:"e"

console.log(newString.length);
console.log(newString.__proto__); //you dont have to use ___proto__ to use any prototype
console.log(newString.toUpperCase());
console.log(newString.charAt(3));
console.log(newString.indexOf("a"));

const newSlice = newString.slice(-6, 4); // in slicing the last index value is not included ie 4 //neg indices start from right
console.log(newSlice);

const newSub = newString.substring(0, 3); // substring won't consider neg values
console.log(newSub);

const string2 = "    isha  "
console.log(string2);
console.log(string2.trim());

let url = "https/google.com/isha%20singh"
console.log(url.replace("%20" , "-"));
console.log(url.includes("isha"));

let randomUser = "nebula-is-a-star"
console.log(randomUser.split("-"));

let randomSen = "My car flies very high. I love it."
console.log(randomSen.split("."));
// at
randomIndex = 3
console.log(`The letter at index ${randomIndex} is ${randomSen.at(randomIndex)}`);
// charCodeAt
console.log(`The code at index ${randomIndex} is ${randomSen.charCodeAt(randomIndex)}`);