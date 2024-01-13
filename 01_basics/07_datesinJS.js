// dates
// temporal.now will be introduced in future

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(typeof myDate);

// month starts from 0 in JS and if we give 12 as input then it will take january
let myCreatedDate = new Date(2023, 12, 19, 5, 3)
let myCreatedDate1 = new Date("01-14-2008") // enter the month first
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// to get value in seconds, divide by 1000 and use floor to get integer value
console.log(Math.floor(Date.now()/1000));

// to extract certain thing like month, year or day use 'get'

let newDate = new Date()
console.log(newDate.getHours());
// to get month just add 1 as jan is denoted by 0

`${newDate.getHours()} is the hours.`
//use cntrl + space to see all available functionalities
newDate.toLocaleString('default', {
    weekday: "long"
 })  