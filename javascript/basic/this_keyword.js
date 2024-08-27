//this current context ke bare mein btata hai 
const user = {
    username: "aditya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); 
    }
}
// console.log(this);  //it refers an empty object
// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()


 function code(){
    let username = "ffjj"
    console.log(username);     //undefined(can not use in function)
}
code()

//arrow function
// const codeadd = (num1, num2) => {
//     return num1 + num2
// }
// or
const codeadd = (num1, num2) => (num1 + num2)
// console.log(codeadd(4,6));

const codeadd2 = () => ({username:"Aditya"})    //return an object
console.log(codeadd2());

