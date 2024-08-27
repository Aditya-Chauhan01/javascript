// Objects creation

//Object literals
// literals mein singleton nhi bnta hai, constructor mein singleton bnta hai

// Object.create() //create object through constructor

const mysym = Symbol("key1");
const jsuser = {
    name: "Aditya",
    "full name": "Aditya Chauhan",
    age: 43,
    Email: "Aditya@microsoft.com",
    isLoggdIn: false,
    lastLoginDays: ["monday", "sunday"],
    mysym : "Symbol",  //the type of mysym is string 
    [mysym]: "this way we use symbol as a key in object", 
}
// console.log(jsuser.Email);  //not good practice
// console.log(jsuser["Email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser["lastLoginDays"]);
// console.log(jsuser);
// console.log(jsuser[mysym]);   //we can access symbol like this

jsuser.Email = "Chauhan@12.com"
// console.log(jsuser);

// Object.freeze(jsuser)   //through it we can not any changes in object
jsuser.Email = "gjrig@43.com"
console.log(jsuser);

jsuser.greetings = function(){
    console.log("Hello js user");
}
// console.log(jsuser.greetings());

jsuser.greetingstwo = function(){
    console.log(`Hello js user ${this.name}`);  //current object ke name ko refer kar rhe hein
}
// console.log(jsuser.greetingstwo());
console.log(jsuser);
