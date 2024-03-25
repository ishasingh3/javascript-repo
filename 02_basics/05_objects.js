// destructure

const course = {
    courseName: "javascript",
    price: "333",
    courseInstructor: "isha"
}

// its troublesome to write course.courseinstructor every time hence we can do this
const {courseInstructor} = course

console.log(courseInstructor);

// to give a shorter alias we can do this:
const {courseInstructor: instructor} = course
console.log(instructor);

// react
// const navbar = (props.company) => {
// const navbar = ({comapny}) => {

// }

// navbar(company = "ishhh")

// json api
{
    "name": "isha",
    "courseName": "javascript",
    "price": "free"
}

// api can be in array format too
// [
//     {},
//     {}
// ]