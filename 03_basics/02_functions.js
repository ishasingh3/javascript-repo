// when we dont know the number of parameters required eg. shopping cart

// rest operator = ... (also called spread depending on where it is used)

function calculateCartPrice(...number1){
    return number1
}

function calculateCartPrice2(val1, val2, ...number1){
    return number1
}

console.log(calculateCartPrice(200, 400, 500));
console.log(calculateCartPrice2(200, 400, 500, 2000)); // will return 500, 2000 only as val1 = 200 & val2 = 400

const user = {
    username: "isha",
    price: 100000
}

function handleObject(anyObject){ // js doesnt automatically check the typeof data
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
// we can directly pass an object instead of making it separately
handleObject({
    username: "macbeth",
    price: 500
})

// passing an array
const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
// passing it directly
console.log(returnSecondValue([300,503,606]));