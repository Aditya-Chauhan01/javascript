let myarr = [3,4,6,3,7,4,"hello" ,"true"]
// console.log(myarr[6]);

// let arr = new arr(3,6,7,9,1,2);

//array methods
// myarrarr.push(12)
// myarr.push(30)
// myarr.pop()
// console.log(myarr);

// myarr.unshift(5) //starting mein add kar rha hai
// myarr.shift()
// myarr.shift()   // it removes the element present in starting
// console.log(myarr);

const newarr = myarr.join() //it adds all elements into stirng
console.log(myarr);
console.log(newarr);
console.log(newarr[3]); //all elements are in string also comma
// console.log(typeof newarr);  //string

console.log('A ', myarr);
// console.log(myarr.slice(1,4));  //it not manipulates original array

console.log(myarr);

// console.log("B ", myarr);
console.log(myarr.splice(1,4)); //it manipulates original array that means it takes out from original array
console.log(myarr);
