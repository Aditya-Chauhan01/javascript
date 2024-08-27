let a = setTimeout(function() {
alert("i am inside of setTimeout")  //after 2 sec it gives an alert
}, 2000)

clearTimeout(a)
console.log(a);

//syntax
// let timeId(returns a timer Id) = settimeout(function, <delay(in ms)>, arg1, arg2.....)

const sum = (a,b) =>{
    console.log("i am running " + (a + b));    //this mssg will show after 3 second
}
setTimeout(sum, 3000, 8,2)
setInterval(sum, 4000, 10,3)

// setInterval(function(){
//     alert("setInterval")
// }, 3000)    //continuoulsy showing after 3 second

