// class user{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const obj1 = new user("git","git@edge.com", "12git")
// console.log(obj1.encryptPassword())
// console.log(obj1.changeUsername());

// behind the scene

function user(username, email, password){
    this.username = username
    this.email = email;
    this.password = password;
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const obj2 = new user("git","git@edge.com", "12git")
console.log(obj2.changeUsername());