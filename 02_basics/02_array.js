// js can take any type of datatype as an element
// it can also take an array as an element

const marvel_heroes = ["ironman", "captain america", "thor"]
const dc_heroes = ["batman", "superman", "aquaman"]

// push (it works on existing array)
// marvel_heroes.push(dc_heroes) // this will take entire array as a single element, hard to access dc_heroes elements
// console.log(marvel_heroes[3][0]); //to get batman

// concat gives a new array altogether
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// easiest way is to use spread
// think of spread as a glass breaking and all the pieces spreading apart
// both concat and spread work similarly but spread is used more commonly
const new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(new_heroes);

// if you array inside an array use flat
// flat needs numerical value to know the depth it has to go to but you can give infinity for it to figure it out on its own
const newArray = [1, 2, 3, [4, 5], 7, [3, 1, 9, [2, 7]]]
console.log(newArray.flat(Infinity));

// to make any datatype/object into an array
console.log(Array.isArray("Isha"));
console.log(Array.from("Isha"));
// if we are giving an object we have to define whether its an array of keys or values, else it will return empty array
console.log(Array.from({name: "isha"}));

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));
