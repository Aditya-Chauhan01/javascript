const name = "   aditya    "   //declaration of string (here also object is invoked BTS)
let age = 50
// console.log(name + age + "chauhan");     this way is not much used       

// console.log(`Hello my name is ${name} and my age is ${age}`);      //it is called string interpolation

const gamename = new String("aditya-chauhan- bro-is-not-hhah is")   //another way of declaration of string (in the form of object)
// console.log(typeof gamename);
// console.log(gamename);  //string elements in key value pair

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(3));

let firstOccurrence = (gamename.indexOf('is'));
// console.log(gamename.indexOf('is',firstOccurrence + 1 ));     //if the string does not contain the substring, indexOf() returns -1.

const newstring = gamename.substring(1,5)
// console.log(newstring);
const anotherstring = gamename.slice(-5,-2)
// console.log(anotherstring);

// console.log(name);
// console.log(name.trim());   //it removes white spaces

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
// console.log(url.replace("=", "/"));
// console.log(url.includes("watch"));
// console.log(url.includes("utuber"));

// console.log(gamename.split("-"));

const browserType = "mozilla";
console.log(browserType.endsWith("zil"));

if (browserType.startsWith("mozi")) {
  console.log("Found");
} else {
  console.log("No");
}
