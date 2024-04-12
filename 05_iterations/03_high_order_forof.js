// a lil array specific loops
// ["", "", ""] // strings in array
// [{}, {}, {}] // objects in array

// forof

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  //object doesnt mean js object
    console.log(num);
}

const greeting = "hello world!"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// maps in js

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('GR', "Germany")
map.set('IN', "India")
// map takes unique values in order
// console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key, ": ", value);
}

const myObject = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

for (const [key, value] of myObject) {  //this does NOT work
    console.log(key, ": ", value);
}
