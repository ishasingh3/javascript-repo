// objects can be declared in two ways
// singleton: from constructor, only one object of its kind
// when used literals, singleton is not made

// constructor method
// Object.create

// symbol
const mySym = Symbol("key1")

// literal method
const JsUser = {
    name: "Isha",
    "full name": "Isha Singh", // can not access this value by using dot(.)
    [mySym]: "mykey1",
    age: 20,
    location: "Noida",
    email: "isha@gmail,com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// how to access values of object
console.log(JsUser.email);
console.log(JsUser["email"]); // as we are accessing a string we used double quotes
// console.log(JsUser."full name"); // this is incorrect, use square notation
console.log(JsUser[mySym]);
console.log(typeof(JsUser[mySym]));

// to change values
JsUser.email = "isha@hotmail.com"

// to lock values 
// Object.freeze(JsUser)
JsUser.email = "isha@proton.com"
console.log(JsUser);

// adding functions
JsUser.greeting = function(){
    console.log("Hello pretty user");
}
JsUser.greeting2 = function(){
    console.log(`Hello pretty user, ${this.name}`);
}
// used "this" as we are referencing the same object

// unfreeze the JsUser to use the function otherwise it will show an error
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
console.log(JsUser.greeting); // if we dont use the inside brackets we get function returnback

// we usually use dot to access object values but in some special cases we have to use square brackets

