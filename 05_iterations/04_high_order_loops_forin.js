const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// forof was not working on Objects
// we will useforin 
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "java"]

for (const key in programming) {
    console.log(`value at ${key} is ${programming[key]}`);
}
// in array difference between forin and forof for arrays is that forin prints out the keys ie the numbers from 0 to n while forof prints directly the values

// map is not iteratable, forin doesnt work

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('GR', "Germany")
map.set('IN', "India")

for (const key in map) {
    console.log(map);
}