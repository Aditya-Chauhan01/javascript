// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, functon(){}

// const userLogIn = []
// if(userLogIn.length === 0)              
//     console.log("Array is empty"); 
// else console.log("nothing");


const empytObj = {}

if(Object.keys(empytObj).length === 0){
    // console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 18;
// val = null ?? 10 ?? 54  // in this case when it gets the first value then the same value is assigned 
console.log(val);

 // terniary Operator
 // condition ? true : false
