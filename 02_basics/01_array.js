// arrays

// different methods to declare an array
const myArr = [0, 1, 2, 3, 4, "isha"]
const myHeroes = ["ironman", "batman"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[5]);

// Array methods

// push: to add element in the end
myArr.push(6)
myArr.push(7)
console.log(myArr);
// pop: last element is deleted
myArr.pop()
console.log(myArr);
// unshift: add element in the beginnig; not recommended to use coz of optimization as each element will have to move one step ahead
myArr.unshift(55)
console.log(myArr);
// shift: removes the first element
myArr.shift()
// to know whether element is present
console.log(myArr.includes(3)); // will return a boolean
console.log(myArr.indexOf(3)); // will return -1 if element not present

// join converts the array into string 
const newArr = myArr.join()
console.log(newArr);

// SLICE AND SPLICE
// splice manipulates the array and removes them from the array; it also includes the last element ie (1,3) will inclue 1,2&3
// slice will only print out the elements, it does not include the last element (1,3) will print 1&2
console.log("A", myArr);
const newArr1 = myArr.slice(1,3);
console.log(newArr1);
console.log("B", myArr);
const newArr2 = myArr.splice(1,3);
console.log(newArr2);
console.log("C", myArr);




