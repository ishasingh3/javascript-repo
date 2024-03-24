// const tinderUser = new Object() // singleton object

const tinderUser = {} // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Lourve"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "blah@gmail.com",
    fullname: {
        userFullname: {
            firstName: "isha",
            lastName: "singh"
        }
    }
}

// console.log(tinderUser);
console.log(regularUser);
console.log(regularUser.fullname.userFullname.firstName);
// console.log(regularUser.fullname?.userFullname.firstName);
// we can use a ? we are not sure if said value exists

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = { 3: "c", 4: "d"}

// const obj3 = { obj1, obj2 } // npt proper

const obj3 = Object.assign({}, obj1, obj2)
// for proper syntax we should add {} while printing the values as {} is treated as target and everything is source

const obj4 = {...obj1, ...obj2} // spread: it is the latest way of using 

console.log(obj4);

const users = [
    {
        id:1,
        email: "i@gmail.com"
    },
    {
        id:1,
        email: "i@gmail.com"
    },
    {
        id:1,
        email: "i@gmail.com"
    },
]

users[1].email

console.log(Object.keys(tinderUser)); // output is an array
console.log(Object.values(tinderUser)); // all array properties can be used
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));