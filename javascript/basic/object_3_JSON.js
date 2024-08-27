const course = {
    courseName: "javascript",
    price: "999",
    courseInstructor: "Aditya" 
}
// course.courseInstructor   

// Destructuring the object's value  
const {courseInstructor : Teacher} = course       
// console.log(courseInstructor);
console.log(Teacher);

// nowadays most of the values come in JSON
// Structure of JSON (like object but keys in form of string)
// {
//     "name": "aadi",
//     "coursename" : " js"
// }
