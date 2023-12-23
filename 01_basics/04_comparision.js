//it is best to always compare same datatypes
console.log(2 > 3);
console.log(2 == 3);
console.log(2 <= 3);
console.log(2 < 3);

//if you are comparing different datatypes then js will convert it for you in some cases
console.log("2" > 1);
console.log("2" > true);
console.log("2" < true);

/* == and > operators work differently, if you are comparing null==0 it will return false
but for null>=0 it will return true as first it it converting null to 0 then comparing */

console.log("hello");
console.log(null == 0);
console.log(null >=0);

/* for undefined it will not convert it to 0 but simpy give output as false */
console.log(undefined == 0);
console.log(undefined > 0);

// comparision and equality check work a lil differently

/* strict check or "===", it will also check the data type,
but it will refuse to check different datatypes. */
