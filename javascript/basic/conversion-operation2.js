let value = "19"
let negvalue = -value
// console.log(negvalue);
// console.log(typeof(negvalue));  // print in number type

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);   //as the first value is string so coming value treat as string
// console.log(1 + 2 + "2");

// console.log(+true); //1
// console.log(+false); //0
// console.log(+"");   //0

// console.log("2" > 1);    //comparison converts automatically string to number
// console.log("02" > 1);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined <= 0);

// console.log(null == 0); 
// console.log(null > 0);
// console.log(null >= 0);  // true
// console.log(null <= 0);  // true

//the reason is that an equality check and comparisons works differently. comparison convert null to number and treating it as 0.

// === it also check the data type
// console.log("2" === 2);     //false not true