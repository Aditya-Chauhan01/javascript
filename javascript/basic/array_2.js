const arr1 = ["hello","this", "me",]
const arr2 = [3, "true", 4, 5]

// arr1.push(arr2)
// console.log(arr1);
// console.log(arr1[5][0]);

const newarr = arr1.concat(arr2)    //as it return a new array
console.log(newarr);

//but we will often use spread method
const all_arr = [...arr1, ...arr2,]
// console.log(all_arr);

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));
console.log(Array.from({name: "Aditya"}));


let a = 100
let b = 200
let c = 300
console.log(Array.of(a, b, c)) ;