// Rest and spread operator
function myfun(val1, val2, ...rest){    //it store all rest perameters in array
    return rest
}
console.log(myfun(100, 420, 199, 999));

//how to pass an object through function
const user = {
    username: "Aditya",
    price: 300
    // prices: 49       //it gives result undefined
}
function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

//we can directly pass an object without storing in variable.
handleObject({
    username: "Doramon",
    age: 932
})

const arr = [23, 5343, 42, 46,]

console.log(fun(arr));    // when we declare a function then we can call it from here also
function fun(getarray){     //passing an array
    return getarray[2]
}
// console.log(fun(arr));


//function calling when it stored in a variable
// console.log(funTwo(7));     // function will not execute from here
const funTwo = function (num){
    return num + 6
}
console.log(funTwo(7));     //from here it works(excute)