const score = 455       //simple declarartion of variable
// console.log(score);

const balance = new Number(44)     //particular number type ka object define kar diya
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   //it returns string

const otherNumber = -123.458
// console.log(otherNumber.toPrecision(4));    //returns string

const number = 1000000
// console.log(number.toLocaleString('en-IN'));

//+++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++

//  console.log(Math);
//  console.log(Math.round(4.6));
//  console.log(Math.ceil(4.1));
//  console.log(Math.floor(4.9));
//  console.log(Math.abs(otherNumber));
//  console.log(Math.max(5,4,44,12));

// console.log(Math.random());     //it gives value between 0 and 1
// console.log(Math.floor(Math.random() * 10) + 1);  //now range is 1 to 10

// but I want 
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);