// js is dynamically typed language.

// primitive data types
// 7 types: String, number, Boolean, null, undefined, symbol, BigINt

// Reference (non primitive)
// Array, object, function

const id = Symbol("124")
const anotherId = Symbol("124")
console.log(id === anotherId);  // symbol means uniqueness

const Heros = ["raju", "hulk", 5, "me"]     //array 

let myobj = {      // key value pair
    name: "aditya",
    age: 19,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof myfunction);     // function return funtion or (object function)